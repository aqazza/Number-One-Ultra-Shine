import { neon } from "@neondatabase/serverless"
import type { PageData } from "@/puck.config"
import { ABOUT_SEED } from "./about-seed"

// Puck page storage on Neon Postgres (Vercel's filesystem is ephemeral, so
// no file-based storage).
//   pages(path text PK, data jsonb, updated_at timestamptz)
//   page_versions(id serial PK, path text, data jsonb, created_at timestamptz)
// Every save appends a version row (capped at the most recent 50 per path),
// so edits — and restores themselves — are always recoverable.
// Without DATABASE_URL (e.g. fresh local checkout) reads return null so
// callers fall back to the in-repo seed, and saves fail loudly.

export const EDITABLE_PATHS = new Set(["/about"])

const VERSION_CAP = 50

export const storageConfigured = () => Boolean(process.env.DATABASE_URL)

function client() {
  const url = process.env.DATABASE_URL
  return url ? neon(url) : null
}

let ensured: Promise<void> | null = null
function ensureTables(sql: NonNullable<ReturnType<typeof client>>) {
  ensured ??= (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS pages (
        path text PRIMARY KEY,
        data jsonb NOT NULL,
        updated_at timestamptz NOT NULL DEFAULT now()
      )`
    await sql`
      CREATE TABLE IF NOT EXISTS page_versions (
        id serial PRIMARY KEY,
        path text NOT NULL,
        data jsonb NOT NULL,
        created_at timestamptz NOT NULL DEFAULT now()
      )`
    await sql`
      CREATE INDEX IF NOT EXISTS page_versions_path_id_idx
      ON page_versions (path, id DESC)`
  })()
  return ensured
}

export async function getPage(path: string): Promise<PageData | null> {
  const sql = client()
  if (!sql) return null
  await ensureTables(sql)
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
  await ensureTables(sql)
  const json = JSON.stringify(data)
  await sql`
    INSERT INTO pages (path, data, updated_at)
    VALUES (${path}, ${json}::jsonb, now())
    ON CONFLICT (path)
    DO UPDATE SET data = EXCLUDED.data, updated_at = now()`
  // Append to history, then prune beyond the retention cap.
  await sql`INSERT INTO page_versions (path, data) VALUES (${path}, ${json}::jsonb)`
  await sql`
    DELETE FROM page_versions
    WHERE path = ${path}
      AND id NOT IN (
        SELECT id FROM page_versions
        WHERE path = ${path}
        ORDER BY id DESC
        LIMIT ${VERSION_CAP}
      )`
}

export type VersionSummary = { id: number; created_at: string; blocks: string[] }

export async function listVersions(path: string): Promise<VersionSummary[]> {
  const sql = client()
  if (!sql) return []
  await ensureTables(sql)
  const rows = (await sql`
    SELECT id,
           created_at,
           coalesce(
             (SELECT jsonb_agg(elem->>'type')
              FROM jsonb_array_elements(data->'content') elem),
             '[]'::jsonb
           ) AS blocks
    FROM page_versions
    WHERE path = ${path}
    ORDER BY id DESC`) as { id: number; created_at: string; blocks: string[] }[]
  return rows
}

export async function getVersion(path: string, id: number): Promise<PageData | null> {
  const sql = client()
  if (!sql) return null
  await ensureTables(sql)
  const rows = (await sql`
    SELECT data FROM page_versions WHERE path = ${path} AND id = ${id}`) as { data: PageData }[]
  return rows[0]?.data ?? null
}

export async function exportAll(): Promise<{
  pages: { path: string; data: PageData; updated_at: string }[]
  versions: { id: number; path: string; data: PageData; created_at: string }[]
}> {
  const sql = client()
  if (!sql) return { pages: [], versions: [] }
  await ensureTables(sql)
  const pages = (await sql`
    SELECT path, data, updated_at FROM pages ORDER BY path`) as {
    path: string
    data: PageData
    updated_at: string
  }[]
  const versions = (await sql`
    SELECT id, path, data, created_at FROM page_versions ORDER BY path, id`) as {
    id: number
    path: string
    data: PageData
    created_at: string
  }[]
  return { pages, versions }
}
