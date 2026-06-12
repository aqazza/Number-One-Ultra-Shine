import { NextResponse } from "next/server"
import { isAuthorized, unauthorized } from "@/lib/admin-auth"
import { exportAll, storageConfigured } from "@/lib/puck/db"

// GET /api/puck/export -> downloads every page + its version history as one
// JSON file. Backup a client site with a single curl (see README).
export async function GET(req: Request) {
  if (!isAuthorized(req)) return unauthorized()
  if (!storageConfigured()) {
    return NextResponse.json({ error: "Storage not configured" }, { status: 503 })
  }
  const dump = await exportAll()
  const stamp = new Date().toISOString().slice(0, 10)
  return new NextResponse(JSON.stringify({ exported_at: new Date().toISOString(), ...dump }, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="puck-export-${stamp}.json"`,
    },
  })
}
