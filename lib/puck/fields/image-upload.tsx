"use client"

import { useRef, useState } from "react"
import { FieldLabel, type CustomField } from "@measured/puck"

// Custom Puck field: thumbnail preview + "Upload" (POSTs to /api/puck/upload,
// which stores in Vercel Blob) + a manual URL input as fallback. The prop
// value is always a plain string URL, so blocks stay storage-agnostic.
//
// IMPORTANT: this module is editor-only. The base puck.config uses plain text
// fields for images; lib/puck/editor-config swaps them for this field inside
// the editor, keeping Puck's editor runtime out of public page bundles.

function ImageUploadInput({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")

  const upload = async (file: File) => {
    setBusy(true)
    setError("")
    try {
      const fd = new FormData()
      fd.append("file", file)
      const res = await fetch("/api/puck/upload", { method: "POST", body: fd })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || `Upload failed (${res.status})`)
      onChange(body.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setBusy(false)
      if (fileRef.current) fileRef.current.value = ""
    }
  }

  return (
    <FieldLabel label={label}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={value}
            alt=""
            style={{
              width: "100%",
              height: 90,
              objectFit: "cover",
              borderRadius: 6,
              border: "1px solid #ddd",
              background: "#0b0c0e",
            }}
          />
        ) : (
          <div
            style={{
              height: 90,
              borderRadius: 6,
              border: "1px dashed #ccc",
              display: "grid",
              placeItems: "center",
              fontSize: 12,
              color: "#888",
            }}
          >
            No image
          </div>
        )}
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={busy}
          style={{
            padding: "8px 10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: busy ? "#eee" : "#fff",
            cursor: busy ? "wait" : "pointer",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {busy ? "Uploading…" : "Upload image"}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) upload(f)
          }}
        />
        {error && (
          <div style={{ fontSize: 12, color: "#b91c1c", lineHeight: 1.4 }}>{error}</div>
        )}
        <input
          type="text"
          value={value}
          placeholder="…or paste an image URL/path"
          onChange={(e) => onChange(e.target.value)}
          style={{
            padding: "8px 10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 12,
            fontFamily: "monospace",
          }}
        />
      </div>
    </FieldLabel>
  )
}

export function imageField(label: string): CustomField<string> {
  return {
    type: "custom",
    label,
    render: ({ value, onChange }) => (
      <ImageUploadInput label={label} value={value ?? ""} onChange={onChange} />
    ),
  }
}
