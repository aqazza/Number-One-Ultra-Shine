"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import type { CSSProperties } from "react"

// soap-bubble rise: varied size/position/timing/travel; CSS handles the motion.
// d = seconds to rise, rise = px of vertical travel (must clear the footer height).
const BUBBLES = [
  { l: "6%", s: 14, d: 7, delay: 0, rise: 360 },
  { l: "14%", s: 26, d: 9.5, delay: 1.5, rise: 440 },
  { l: "23%", s: 9, d: 6, delay: 0.6, rise: 320 },
  { l: "34%", s: 20, d: 8.5, delay: 2.4, rise: 480 },
  { l: "44%", s: 12, d: 7, delay: 0.3, rise: 380 },
  { l: "55%", s: 30, d: 10, delay: 1.2, rise: 500 },
  { l: "63%", s: 10, d: 6.5, delay: 3, rise: 340 },
  { l: "72%", s: 18, d: 8, delay: 0.9, rise: 430 },
  { l: "81%", s: 24, d: 9, delay: 2, rise: 470 },
  { l: "90%", s: 13, d: 7.5, delay: 0.4, rise: 360 },
  { l: "96%", s: 8, d: 5.5, delay: 1.8, rise: 300 },
]

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <footer className={"footer" + (inView ? " bubbles-on" : "")} ref={ref}>
      <div className="bubbles" aria-hidden="true">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={
              {
                left: b.l,
                "--bs": b.s + "px",
                "--bd": b.d + "s",
                "--bdelay": b.delay + "s",
                "--brise": "-" + b.rise + "px",
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="wrap">
        <div className="top">
          <div style={{ maxWidth: 320 }}>
            <Link className="brand" href="/" style={{ marginBottom: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ultra-shine-mark.webp" alt="" width={42} height={42} loading="lazy" decoding="async" />
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span className="a">
                  <span className="one">Number One</span> Ultra Shine
                </span>
                <span className="b">Premium Auto Detailing</span>
              </span>
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--fg-3)", margin: "8px 0 0" }}>
              Family-run detailing in Glendora, CA since 1995. Careful, hand-finished work that makes
              your vehicle look its best.
            </p>
          </div>
          <div className="links">
            <div className="col">
              <h4>Explore</h4>
              <Link href="/#services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
              <Link href="/#reviews">Reviews</Link>
            </div>
            <div className="col">
              <h4>Company</h4>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
            <div className="col">
              <h4>Visit</h4>
              <a
                href="https://maps.google.com/?q=525+E+Route+66+Glendora+CA+91740"
                target="_blank"
                rel="noreferrer"
              >
                525 E Route 66
                <br />
                Glendora, CA 91740
              </a>
              <a href="tel:6266294916">(626) 629-4916</a>
              <a href="mailto:1ultrashine@gmail.com">1ultrashine@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} Number One Ultra Shine. All rights reserved.</span>
          <span className="legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="sep">·</span>
            <Link href="/terms">Terms of Service</Link>
            <span className="sep">·</span>
            <span>Glendora, CA · Since 1995</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
