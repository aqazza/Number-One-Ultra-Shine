# Number One Ultra Shine

Marketing site for Number One Ultra Shine (Glendora, CA) — Next.js App Router.

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Editing pages (Puck)

The **About** page is client-editable with [Puck](https://puckeditor.com). All
other routes are regular code.

**How to edit:**

1. Set env vars (see `.env.example`): `ADMIN_USER` / `ADMIN_PASS` for the admin
   login, `DATABASE_URL` for a Neon Postgres database (Vercel → Storage → Neon).
2. Open `/admin/edit/about` and sign in with the basic-auth prompt.
3. Edit content in the left panel — headings, copy, images, list items, and
   per-section Show/Hide. Layout, colors and typography are locked by design.
4. Click **Publish**. The live `/about` page updates immediately.

**How it works:** Puck documents are stored as JSON in a `pages` table
(`path` PK, `data` jsonb, `updated_at`). The table is created and seeded
automatically on first use with the current About content, so the page is
identical before and after enabling editing. Without `DATABASE_URL`, `/about`
renders the in-repo seed (`lib/puck/about-seed.ts`) and the editor can load
but not save (HTTP 503).

| Piece | Where |
| --- | --- |
| Block definitions (fields per section) | `puck.config.tsx` |
| Section markup (design source of truth) | `components/about/sections.tsx` |
| Default/seed content | `lib/puck/about-content.ts`, `lib/puck/about-seed.ts` |
| Storage (Neon) | `lib/puck/db.ts` |
| Load/save API | `app/api/puck/route.ts` (GET public, POST authed, `/about` allowlist) |
| Editor route | `app/admin/edit/about/page.tsx` |
| Admin auth (swap for NextAuth here) | `lib/admin-auth.ts` + `middleware.ts` |

**Version history:** every Publish stores a version (latest 50 per page).
In the editor, click **History** to list versions and restore one — restores
are saved as new versions, so they're always undoable.

**Backup/export:** download every page and its full version history as one
JSON file:

```bash
curl -u "$ADMIN_USER:$ADMIN_PASS" -o backup.json https://YOUR-DOMAIN/api/puck/export
```

To make another page editable later: extract its sections to prop-driven
components, register them in `puck.config.tsx`, add the path to
`EDITABLE_PATHS` in `lib/puck/db.ts`, and add an editor route under
`/admin/edit/...`.
