"use client"

import { useMemo, useState } from "react"
import { Puck, type Data } from "@measured/puck"
import { buildEditorConfig } from "@/lib/puck/editor-config"
import "@measured/puck/puck.css"

export function AboutEditor({ path, initialData }: { path: string; initialData: Data }) {
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [message, setMessage] = useState("")
  const editorCfg = useMemo(() => buildEditorConfig(), [])

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
      <Puck config={editorCfg} data={initialData} onPublish={publish} />
      {status !== "idle" && (
        <div
          role="status"
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
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
