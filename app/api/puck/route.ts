import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
import { isAuthorized, unauthorized } from "@/lib/admin-auth"
import { EDITABLE_PATHS, getPage, savePage, storageConfigured } from "@/lib/puck/db"
import { SEEDS } from "@/lib/puck/seeds"

// GET /api/puck?path=/about  -> { data }
export async function GET(req: Request) {
  const path = new URL(req.url).searchParams.get("path") ?? ""
  if (!EDITABLE_PATHS.has(path)) {
    return NextResponse.json({ error: "Path not editable" }, { status: 400 })
  }
  const data = (await getPage(path)) ?? SEEDS[path] ?? null
  return NextResponse.json({ data })
}

// POST /api/puck  { path, data }  -> { ok }
// Also guarded by middleware; this in-route check is defense in depth.
export async function POST(req: Request) {
  if (!isAuthorized(req)) return unauthorized()

  let body: { path?: string; data?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const { path, data } = body
  if (!path || !EDITABLE_PATHS.has(path)) {
    return NextResponse.json({ error: "Path not editable" }, { status: 400 })
  }
  if (
    !data ||
    typeof data !== "object" ||
    !Array.isArray((data as { content?: unknown }).content)
  ) {
    return NextResponse.json({ error: "Invalid Puck data" }, { status: 400 })
  }
  if (!storageConfigured()) {
    return NextResponse.json(
      { error: "Storage not configured: set DATABASE_URL (Neon) to enable saving." },
      { status: 503 },
    )
  }

  await savePage(path, data as Parameters<typeof savePage>[1])
  revalidatePath(path)
  return NextResponse.json({ ok: true })
}
