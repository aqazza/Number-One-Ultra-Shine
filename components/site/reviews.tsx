"use client"

import { useEffect, useState } from "react"
import { Icon } from "./icon"
import { Eyebrow } from "./ui"
import { Reveal } from "./reveal"

export type ReviewsProps = {
  eyebrow: string
  heading: string
  intro: string
  ratingValue: string
  ratingNote: string
  reviews: { q: string; nm: string; when: string; av: string; c: string }[]
}

// Google "G" mark for the reviews source label
function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-label="Google" style={{ display: "block" }}>
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  )
}

function GStars({ value = 5, size = 16 }: { value?: number; size?: number }) {
  const star = "M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z"
  const pct = Math.max(0, Math.min(100, (value / 5) * 100))
  const row = (on: boolean) =>
    Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" width={size} height={size} className={on ? "on" : ""}>
        <path d={star} />
      </svg>
    ))
  return (
    <div className="g-stars" role="img" aria-label={value + " star rating"}>
      {row(false)}
      {/* gold overlay clipped to the rating for an accurate partial star */}
      <div className="g-stars-fill" style={{ width: pct + "%" }} aria-hidden="true">
        {row(true)}
      </div>
    </div>
  )
}

export function Reviews(p: ReviewsProps) {
  const REVIEWS = p.reviews
  const [per, setPer] = useState(3)
  const [start, setStart] = useState(0)
  useEffect(() => {
    const onResize = () =>
      setPer(window.innerWidth < 900 ? 1 : window.innerWidth < 1100 ? 2 : 3)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])
  const max = Math.max(0, REVIEWS.length - per)
  useEffect(() => {
    setStart((s) => Math.min(s, max))
  }, [max])
  const go = (d: number) => setStart((s) => Math.min(max, Math.max(0, s + d)))
  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h2>{p.heading}</h2>
          <p>{p.intro}</p>
        </Reveal>
        <Reveal tag="div">
          <div className="g-summary">
            <div className="g-score">
              <div className="num">{p.ratingValue}</div>
              <GStars value={parseFloat(p.ratingValue) || 5} size={20} />
              <div className="cnt">{p.ratingNote}</div>
            </div>
            <div className="g-src">
              <GoogleG size={26} />
              <div>
                <div className="lbl">Google Reviews</div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Route+66+Car+Wash%2C+525+E+Route+66%2C+Glendora%2C+CA+91740"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read all reviews
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="rev-vp">
          <div
            className="rev-track"
            style={{ transform: `translateX(-${start * (100 / per)}%)` }}
          >
            {REVIEWS.map((r, i) => (
              <div className="rev" key={i} style={{ flexBasis: 100 / per + "%" }}>
                <div className="uss-card">
                  <div className="pad">
                    <div className="rev-top">
                      <div className="av" style={{ background: r.c }}>
                        {r.av}
                      </div>
                      <div className="meta">
                        <div className="nm">{r.nm}</div>
                        <div className="when">{r.when}</div>
                      </div>
                      <span className="g-mark">
                        <GoogleG size={20} />
                      </span>
                    </div>
                    <GStars value={5} size={16} />
                    <p className="q">{r.q}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rev-nav">
          <button onClick={() => go(-1)} disabled={start === 0} aria-label="Previous">
            <Icon name="arrow-left" size={18} />
          </button>
          <div className="rev-dots">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                className={"dot" + (i === start ? " on" : "")}
                onClick={() => setStart(i)}
                aria-label={"Page " + (i + 1)}
              />
            ))}
          </div>
          <button onClick={() => go(1)} disabled={start === max} aria-label="Next">
            <Icon name="arrow-right" size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
