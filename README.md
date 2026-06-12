# Number One Ultra Shine

Marketing site for Number One Ultra Shine (Glendora, CA) — Next.js App Router.

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Editing the site (Puck)

Every main page is client-editable with [Puck](https://puckeditor.com):
home, About, Gallery, Contact and the four service pages. `/privacy` and
`/terms` stay code-managed.

### For the client: how to edit

1. Open **`/admin`** and sign in (browser password prompt; credentials are the
   `ADMIN_USER` / `ADMIN_PASS` env vars).
2. The dashboard lists every editable page with its last-updated time. Click
   **Edit**.
3. Change content in the left panel: headings, paragraphs, list items,
   images (Upload or paste a URL), and per-section Show/Hide. Layout, colors
   and typography are fixed by design.
4. Click **Publish**. The live page updates immediately.
5. Made a mistake? Click **History** in the editor header, find the version
   you want (newest first), **Restore → Confirm restore**. Restores are saved
   as new versions, so they're always undoable.

### For the developer

**Env vars** (see `.env.example`):

| Var | Purpose |
| --- | --- |
| `DATABASE_URL` | Neon Postgres (Vercel → Storage → Neon). Stores page JSON + version history. |
| `ADMIN_USER` / `ADMIN_PASS` | HTTP basic auth for `/admin` and all Puck write APIs. |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob (public store) for editor image uploads. Optional — manual URLs work without it. |

**Storage:** `pages(path PK, data jsonb, updated_at)` plus
`page_versions(id, path, data, created_at)` capped at the latest 50 per page.
Tables are created and seeded automatically on first use with the current
in-repo content (`lib/puck/*-content.ts`), so pages render identically with
or without a database row.

**Backup / export** — one file with every page and its full history:

```bash
curl -u "$ADMIN_USER:$ADMIN_PASS" -o backup.json https://YOUR-DOMAIN/api/puck/export
```

**Where things live:**

| Piece | Where |
| --- | --- |
| Block definitions (fields per section) | `lib/puck/blocks/*.tsx`, composed in `puck.config.tsx` |
| Section markup (design source of truth) | `components/site/*`, `components/about/sections.tsx` |
| Current content / seeds | `lib/puck/*-content.ts`, `lib/puck/seeds.ts` |
| Storage (Neon) + versions | `lib/puck/db.ts` |
| APIs | `app/api/puck/*` — data GET is public; saves, uploads, versions, export are authed |
| Admin dashboard / editor | `app/admin/page.tsx`, `app/admin/edit/[[...path]]/` |
| Image upload field | `lib/puck/fields/image-upload.tsx` (+ `lib/puck/editor-config.ts` overlay) |
| Auth (swap for NextAuth here) | `lib/admin-auth.ts` + `middleware.ts` |

**Adding an editable page:** extract its sections into prop-driven components,
define blocks in `lib/puck/blocks/`, add content + a seed entry in
`lib/puck/seeds.ts` (path + title) — the allowlist, auto-seed, dashboard and
editor route all derive from the seeds registry.
