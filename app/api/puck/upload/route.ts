import { NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { isAuthorized, unauthorized } from "@/lib/admin-auth"

const ALLOWED_TYPES = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
])
const MAX_BYTES = 8 * 1024 * 1024 // 8MB

// POST /api/puck/upload (multipart, field "file") -> { url }
// Guarded by middleware; in-route check is defense in depth.
export async function POST(req: Request) {
  if (!isAuthorized(req)) return unauthorized()

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Image storage not configured: add BLOB_READ_WRITE_TOKEN (Vercel → Storage → Blob). Manual URLs still work." },
      { status: 503 },
    )
  }

  const form = await req.formData().catch(() => null)
  const file = form?.get("file")
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 })
  }
  const ext = ALLOWED_TYPES.get(file.type)
  if (!ext) {
    return NextResponse.json({ error: "Images only: jpg, png or webp" }, { status: 415 })
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File too large (max 8MB)" }, { status: 413 })
  }

  const base = (file.name || "image").replace(/\.[^.]*$/, "").replace(/[^a-zA-Z0-9_-]+/g, "-").slice(0, 60) || "image"
  try {
    const blob = await put(`puck/${base}.${ext}`, file, {
      access: "public",
      addRandomSuffix: true,
      contentType: file.type,
    })
    return NextResponse.json({ url: blob.url })
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Upload failed"
    return NextResponse.json({ error: `Blob upload failed: ${msg}` }, { status: 502 })
  }
}
