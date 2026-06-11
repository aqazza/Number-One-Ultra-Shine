"use client"

import { useEffect, useRef, useState } from "react"
import { Btn, Eyebrow } from "./ui"

const HERO_VIDEOS = [
  { src: "/videos/wash.mp4", poster: "/photos/exterior-wash.webp" },
  { src: "/videos/polish.mp4", poster: "/photos/detailing-station.webp" },
  { src: "/videos/interior.mp4", poster: "/photos/closeup-care-1.webp" },
]

export function Hero() {
  const [i, setI] = useState(0)
  const refs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % HERO_VIDEOS.length), 6400)
    return () => clearInterval(t)
  }, [])

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
        {HERO_VIDEOS.map((clip, n) => (
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
          <Eyebrow>Detailing Excellence Since 1995</Eyebrow>
          <h1>
            Your car, finished
            <br />
            to a <span className="accent">flawless shine.</span>
          </h1>
          <p className="lead">
            Thirty years of hand-finished detailing in Glendora: interior, exterior, full details
            and ceramic coating, done with care.
          </p>
          <div className="cta-row">
            <Btn variant="primary" size="lg" href="/contact" icon="phone">
              Book Today
            </Btn>
            <Btn variant="secondary" size="lg" href="/#services" iconRight="arrow-right">
              View Services
            </Btn>
          </div>
        </div>
      </div>
      <div className="dots">
        {HERO_VIDEOS.map((_, n) => (
          <button
            key={n}
            className={n === i ? "on" : ""}
            onClick={() => setI(n)}
            aria-label={"Slide " + (n + 1)}
          />
        ))}
      </div>
      <div className="stat">
        <div className="n">30+</div>
        <div className="l">Years of craft</div>
      </div>
    </section>
  )
}
