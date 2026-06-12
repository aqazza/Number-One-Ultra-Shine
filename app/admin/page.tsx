import type { Metadata } from "next"
import { listPages, storageConfigured } from "@/lib/puck/db"
import { PAGE_TITLES } from "@/lib/puck/seeds"

export const metadata: Metadata = {
  title: "Site Editor | Number One Ultra Shine",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

const CYAN = "#2DD9F0"

export default async function AdminDashboard() {
  const rows = storageConfigured() ? await listPages() : []
  const updated = new Map(rows.map((r) => [r.path, r.updated_at]))

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#08090B",
        color: "#F5F7FA",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "64px 24px",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <span
            aria-hidden
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: CYAN,
              boxShadow: `0 0 12px ${CYAN}`,
            }}
          />
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
            Site Editor
          </h1>
        </div>
        <p style={{ color: "#AEB4BD", margin: "0 0 36px", fontSize: 14 }}>
          Pick a page to edit. Publishing updates the live site immediately; every publish is
          kept in version history.
        </p>

        {!storageConfigured() && (
          <p
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #7f1d1d",
              background: "rgba(127,29,29,.2)",
              color: "#fca5a5",
              fontSize: 13,
            }}
          >
            DATABASE_URL is not configured — pages render their built-in content and edits
            cannot be saved.
          </p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {Object.entries(PAGE_TITLES).map(([path, title]) => {
            const ts = updated.get(path)
            return (
              <div
                key={path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 20px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,.08)",
                  background: "linear-gradient(160deg, #15181C, #0E1013)",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{title}</div>
                  <div style={{ color: "#767D87", fontSize: 12.5, marginTop: 2 }}>
                    {path} ·{" "}
                    {ts ? `updated ${new Date(ts).toLocaleString()}` : "not yet edited"}
                  </div>
                </div>
                <a
                  href={path}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#AEB4BD",
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "8px 14px",
                    borderRadius: 9,
                    border: "1px solid rgba(255,255,255,.12)",
                  }}
                >
                  View
                </a>
                <a
                  href={path === "/" ? "/admin/edit" : `/admin/edit${path}`}
                  style={{
                    color: "#08090B",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: 9,
                    background: CYAN,
                    boxShadow: `0 6px 18px -6px ${CYAN}`,
                  }}
                >
                  Edit
                </a>
              </div>
            )
          })}
        </div>

        <p style={{ color: "#4A5059", fontSize: 12, marginTop: 32 }}>
          Backup: <code style={{ color: "#767D87" }}>curl -u user:pass /api/puck/export</code> —
          see the README for details.
        </p>
      </div>
    </main>
  )
}
