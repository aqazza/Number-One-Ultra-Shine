"use client"

import { useEffect, useRef, useState } from "react"
import { Icon } from "./icon"
import { Eyebrow } from "./ui"
import { Reveal } from "./reveal"

export type Pair = { before: string; after: string; cat: string; label: string }

export type GalleryGridProps = {
  eyebrow: string
  heading: string
  intro: string
  pairs: Pair[]
}

const CATS = ["All", "Interior", "Exterior", "Wheels"] as const

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const [p, setP] = useState(50)
  const drag = useRef(false)
  const move = (clientX: number) => {
    if (!wrap.current) return
    const r = wrap.current.getBoundingClientRect()
    const v = ((clientX - r.left) / r.width) * 100
    setP(Math.max(0, Math.min(100, v)))
  }
  useEffect(() => {
    const up = () => (drag.current = false)
    const mv = (e: PointerEvent) => {
      if (drag.current) move(e.clientX)
    }
    window.addEventListener("pointerup", up)
    window.addEventListener("pointermove", mv)
    return () => {
      window.removeEventListener("pointerup", up)
      window.removeEventListener("pointermove", mv)
    }
  }, [])
  return (
    <div
      className="ba-wrap"
      ref={wrap}
      onPointerDown={(e) => {
        drag.current = true
        move(e.clientX)
      }}
    >
      {/* after sits underneath; before is clipped on top and shrinks as you drag */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ba-after" src={after} alt="After detailing" draggable={false} loading="lazy" decoding="async" />
      <div className="ba-clip" style={{ width: p + "%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ba-before"
          src={before}
          alt="Before detailing"
          draggable={false}
          loading="lazy"
          decoding="async"
          style={{ width: (wrap.current ? wrap.current.offsetWidth : 360) + "px", maxWidth: "none" }}
        />
      </div>
      <span className="ba-tag l">Before</span>
      <span className="ba-tag r">After</span>
      <div className="ba-line" style={{ left: p + "%" }} />
      <div className="ba-knob" style={{ left: p + "%" }}>
        <Icon name="chevrons-left-right" size={18} />
      </div>
    </div>
  )
}

function Tile({ pair, delay }: { pair: Pair; delay: number }) {
  return (
    <Reveal className="gal-tile ba" tag="figure" delay={delay}>
      <BeforeAfter before={pair.before} after={pair.after} />
      <span className="gal-cat">{pair.cat}</span>
      <figcaption className="gal-cap">{pair.label}</figcaption>
    </Reveal>
  )
}

export function GalleryGrid(props: GalleryGridProps) {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All")
  const pairs = props.pairs.filter((p) => cat === "All" || p.cat === cat)
  return (
    <div className="wrap">
      <div className="gal-head">
        <Eyebrow>{props.eyebrow}</Eyebrow>
        <h1>{props.heading}</h1>
        <p>{props.intro}</p>
        <div className="gal-filters">
          {CATS.map((c) => (
            <button
              key={c}
              className={"uss-chip" + (cat === c ? " is-active" : "")}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="gal-grid">
        {pairs.map((pair, i) => (
          <Tile key={i} pair={pair} delay={i * 90} />
        ))}
      </div>
    </div>
  )
}
