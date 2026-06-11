import { neon } from "@neondatabase/serverless"
import type { PageData } from "@/puck.config"
import { ABOUT_SEED } from "./about-seed"

// Puck page storage on Neon Postgres (Vercel's filesystem is ephemeral, so
// no file-based storage). One row per editable path:
//   pages(path text PK, data jsonb, updated_at timestamptz)
// Without DATABASE_URL (e.g. fresh local checkout) reads return null so
// callers fall back to the in-repo seed, and saves fail loudly.

export const EDITABLE_PATHS = new Set(["/about"])

export const storageConfigured = () => Boolean(process.env.DATABASE_URL)

function client() {
  const url = process.env.DATABASE_URL
  return url ? neon(url) : null
}

let ensured: Promise<unknown> | null = null
function ensureTable(sql: NonNullable<ReturnType<typeof client>>) {
  ensured ??= sql`
    CREATE TABLE IF NOT EXISTS pages (
      path text PRIMARY KEY,
      data jsonb NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now()
    )`
  return ensured
}

export async function getPage(path: string): Promise<PageData | null> {
  const sql = client()
  if (!sql) return null
  await ensureTable(sql)
  const rows = (await sql`SELECT data FROM pages WHERE path = ${path}`) as { data: PageData }[]
  if (rows.length > 0) return rows[0].data
  // First read ever for /about: seed the table with the current live content
  // so the editor starts from exactly what's published today.
  if (path === "/about") {
    await savePage(path, ABOUT_SEED)
    return ABOUT_SEED
  }
  return null
}

export async function savePage(path: string, data: PageData): Promise<void> {
  const sql = client()
  if (!sql) throw new Error("DATABASE_URL is not configured")
  await ensureTable(sql)
  await sql`
    INSERT INTO pages (path, data, updated_at)
    VALUES (${path}, ${JSON.stringify(data)}::jsonb, now())
    ON CONFLICT (path)
    DO UPDATE SET data = EXCLUDED.data, updated_at = now()`
}
