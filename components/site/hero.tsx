"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Btn, Eyebrow } from "./ui"

export type HeroProps = {
  eyebrow: string
  headingTop: string
  headingMid: string
  headingAccent: string
  lead: string
  primaryCta: string
  secondaryCta: string
  videos: { src: string; poster: string }[]
  statNumber: string
  statLabel: string
}

export function Hero(p: HeroProps) {
  const [i, setI] = useState(0)
  const refs = useRef<(HTMLVideoElement | null)[]>([])
  const count = p.videos.length

  useEffect(() => {
    if (count < 2) return
    const t = setInterval(() => setI((x) => (x + 1) % count), 6400)
    return () => clearInterval(t)
  }, [count])

  // Only the visible clip plays; restart it from the top as it fades in.
  useEffect(() => {
    refs.current.forEach((v, n) => {
      if (!v) return
      if (n === i) {
        v.currentTime = 0
        v.play().catch(() => {})
      } else {
        v.pause()
      }
    })
  }, [i])

  return (
    <section className="hero">
      <div className="bg">
        {p.videos.map((clip, n) => (
          <video
            key={clip.src}
            ref={(el) => {
              refs.current[n] = el
            }}
            className={n === i ? "show" : ""}
            src={clip.src}
            poster={clip.poster}
            muted
            loop
            playsInline
            preload={n === 0 ? "auto" : "none"}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="wrap">
        <div className="inner">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h1>
            {p.headingTop}
            <br />
            {p.headingMid} <span className="accent">{p.headingAccent}</span>
          </h1>
          <p className="lead">{p.lead}</p>
          <div className="cta-row">
            <Btn variant="primary" size="lg" href="/contact" icon="phone">
              {p.primaryCta}
            </Btn>
            <Btn variant="secondary" size="lg" href="/#services" iconRight="arrow-right">
              {p.secondaryCta}
            </Btn>
          </div>
          <nav className="hero-services" aria-label="Our services">
            <Link href="/services/interior-detailing">Interior</Link>
            <span className="sep" aria-hidden="true" />
            <Link href="/services/exterior">Exterior</Link>
            <span className="sep" aria-hidden="true" />
            <Link href="/services/full-details">Full Details</Link>
            <span className="sep" aria-hidden="true" />
            <Link href="/services/ceramic-coating">Ceramic Coating</Link>
          </nav>
        </div>
      </div>
      <div className="dots">
        {p.videos.map((_, n) => (
          <button
            key={n}
            className={n === i ? "on" : ""}
            onClick={() => setI(n)}
            aria-label={"Slide " + (n + 1)}
          />
        ))}
      </div>
      <div className="stat">
        <div className="n">{p.statNumber}</div>
        <div className="l">{p.statLabel}</div>
      </div>
    </section>
  )
}
