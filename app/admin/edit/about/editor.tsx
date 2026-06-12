"use client"

import { useMemo, useState } from "react"
import { Puck, type Data } from "@measured/puck"
import { buildEditorConfig } from "@/lib/puck/editor-config"
import type { VersionSummary } from "@/lib/puck/db"
import "@measured/puck/puck.css"

export function AboutEditor({ path, initialData }: { path: string; initialData: Data }) {
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [message, setMessage] = useState("")
  const editorCfg = useMemo(() => buildEditorConfig(), [])

  // version history drawer
  const [historyOpen, setHistoryOpen] = useState(false)
  const [versions, setVersions] = useState<VersionSummary[] | null>(null)
  const [confirmId, setConfirmId] = useState<number | null>(null)
  const [restoring, setRestoring] = useState(false)

  const openHistory = async () => {
    setHistoryOpen(true)
    setConfirmId(null)
    try {
      const res = await fetch(`/api/puck/versions?path=${encodeURIComponent(path)}`)
      const body = await res.json()
      setVersions(body.versions ?? [])
    } catch {
      setVersions([])
    }
  }

  const restore = async (versionId: number) => {
    setRestoring(true)
    try {
      const res = await fetch("/api/puck/versions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, versionId }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || `Restore failed (${res.status})`)
      // Reload so the editor reopens on the restored document.
      window.location.reload()
    } catch (err) {
      setRestoring(false)
      setStatus("error")
      setMessage(err instanceof Error ? err.message : "Restore failed")
    }
  }

  const publish = async (data: unknown) => {
    setStatus("saving")
    try {
      const res = await fetch("/api/puck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, data }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || `Save failed (${res.status})`)
      setStatus("saved")
      setMessage("Published. The live page updates immediately.")
    } catch (err) {
      setStatus("error")
      setMessage(err instanceof Error ? err.message : "Save failed")
    }
  }

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Puck
        config={editorCfg}
        data={initialData}
        onPublish={publish}
        overrides={{
          headerActions: ({ children }) => (
            <>
              <button type="button" onClick={openHistory} style={btn()}>
                History
              </button>
              {children}
            </>
          ),
        }}
      />

      {historyOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            width: 340,
            zIndex: 1100,
            background: "#fff",
            borderLeft: "1px solid #ddd",
            boxShadow: "-12px 0 32px rgba(0,0,0,.18)",
            display: "flex",
            flexDirection: "column",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 16px",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong style={{ fontSize: 14 }}>Version history</strong>
            <button type="button" onClick={() => setHistoryOpen(false)} style={btn()}>
              Close
            </button>
          </div>
          <div style={{ overflowY: "auto", flex: 1, padding: 12 }}>
            {versions === null && <p style={meta()}>Loading…</p>}
            {versions?.length === 0 && <p style={meta()}>No versions yet. Publish once to start history.</p>}
            {versions?.map((v, i) => (
              <div
                key={v.id}
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: 8,
                  padding: "10px 12px",
                  marginBottom: 8,
                  background: i === 0 ? "#f0f9ff" : "#fafafa",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 600 }}>
                  {new Date(v.created_at).toLocaleString()}
                  {i === 0 && <span style={{ color: "#0369a1" }}> · current</span>}
                </div>
                <div style={{ ...meta(), margin: "4px 0 8px" }}>{v.blocks.join(", ")}</div>
                {i !== 0 &&
                  (confirmId === v.id ? (
                    <div style={{ display: "flex", gap: 6 }}>
                      <button
                        type="button"
                        disabled={restoring}
                        onClick={() => restore(v.id)}
                        style={{ ...btn(), background: "#dc2626", color: "#fff", borderColor: "#dc2626" }}
                      >
                        {restoring ? "Restoring…" : "Confirm restore"}
                      </button>
                      <button type="button" onClick={() => setConfirmId(null)} style={btn()}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button type="button" onClick={() => setConfirmId(v.id)} style={btn()}>
                      Restore
                    </button>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {status !== "idle" && (
        <div
          role="status"
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1200,
            padding: "10px 16px",
            borderRadius: 10,
            fontSize: 13,
            fontFamily: "system-ui, sans-serif",
            color: status === "error" ? "#7f1d1d" : "#0c4a6e",
            background: status === "error" ? "#fecaca" : "#e0f2fe",
            border: "1px solid " + (status === "error" ? "#ef4444" : "#38bdf8"),
          }}
        >
          {status === "saving" ? "Saving…" : message}
        </div>
      )}
    </div>
  )
}

const btn = () => ({
  padding: "6px 12px",
  borderRadius: 6,
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: 13,
  fontWeight: 600 as const,
  cursor: "pointer",
})

const meta = () => ({ fontSize: 12, color: "#777" })
