"use client"

import { useState } from "react"

// Expanding-panel gallery: the active panel grows wide and comes into full
// color while the rest compress and dim. Hover (or tap on touch) to switch.
export type GalleryItem = { src: string; tag: string; caption: string }

export function ExpandGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState(0)
  return (
    <div className="xgal">
      {items.map((it, n) => (
        <button
          key={it.src}
          type="button"
          className={"xgal-panel" + (n === active ? " on" : "")}
          onMouseEnter={() => setActive(n)}
          onFocus={() => setActive(n)}
          onClick={() => setActive(n)}
          aria-label={it.tag + ": " + it.caption}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={it.src} alt={it.caption} loading="lazy" decoding="async" />
          <span className="xgal-scrim" aria-hidden="true" />
          <span className="xgal-cap">
            <span className="xgal-tag">{it.tag}</span>
            <span className="xgal-txt">{it.caption}</span>
          </span>
        </button>
      ))}
    </div>
  )
}
