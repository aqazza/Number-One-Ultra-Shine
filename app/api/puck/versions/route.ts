import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
import { isAuthorized, unauthorized } from "@/lib/admin-auth"
import {
  EDITABLE_PATHS,
  getVersion,
  listVersions,
  savePage,
  storageConfigured,
} from "@/lib/puck/db"

// GET /api/puck/versions?path=/about -> { versions: [{id, created_at, blocks}] }
export async function GET(req: Request) {
  if (!isAuthorized(req)) return unauthorized()
  const path = new URL(req.url).searchParams.get("path") ?? ""
  if (!EDITABLE_PATHS.has(path)) {
    return NextResponse.json({ error: "Path not editable" }, { status: 400 })
  }
  if (!storageConfigured()) {
    return NextResponse.json({ versions: [], warning: "Storage not configured" })
  }
  return NextResponse.json({ versions: await listVersions(path) })
}

// POST /api/puck/versions { path, versionId } -> { ok }
// Restores by writing the old document as a NEW save, so restores are
// themselves versioned and always undoable.
export async function POST(req: Request) {
  if (!isAuthorized(req)) return unauthorized()
  let body: { path?: string; versionId?: number }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }
  const { path, versionId } = body
  if (!path || !EDITABLE_PATHS.has(path)) {
    return NextResponse.json({ error: "Path not editable" }, { status: 400 })
  }
  if (typeof versionId !== "number") {
    return NextResponse.json({ error: "versionId required" }, { status: 400 })
  }
  if (!storageConfigured()) {
    return NextResponse.json({ error: "Storage not configured" }, { status: 503 })
  }
  const data = await getVersion(path, versionId)
  if (!data) {
    return NextResponse.json({ error: "Version not found" }, { status: 404 })
  }
  await savePage(path, data)
  revalidatePath(path)
  return NextResponse.json({ ok: true })
}
