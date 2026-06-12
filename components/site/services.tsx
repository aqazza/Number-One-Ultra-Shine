"use client"

import { useEffect, useRef, useState } from "react"
import { Icon } from "./icon"
import { Btn, Eyebrow } from "./ui"
import { Reveal } from "./reveal"

export type Sub = { nm: string; ds: string; featured?: boolean }
export type Service = {
  details: string
  icon: string
  title: string
  img: string
  blurb: string
  note?: string
  href: string
  subs: Sub[]
}

function ServiceCard({
  svc,
  active,
  onClick,
}: {
  svc: Service
  active: boolean
  onClick: () => void
}) {
  return (
    <button type="button" className={"uss-card svc" + (active ? " active" : "")} onClick={onClick}>
      <div className="pad">
        <div className="svc-head">
          <span className="svc-ico">
            <Icon name={svc.icon} size={24} />
          </span>
          <span className="svc-count">
            {svc.subs.length} service{svc.subs.length === 1 ? "" : "s"}
          </span>
        </div>
        <div className="svc-body">
          <h3>{svc.title}</h3>
          <p className="svc-blurb">{svc.blurb}</p>
        </div>
        <div className="svc-foot">
          <span className="svc-link">View details</span>
          <span className="caret">
            <Icon name="arrow-up-right" size={18} />
          </span>
        </div>
      </div>
    </button>
  )
}

function ServiceOverlay({ svc, onClose }: { svc: Service | null; onClose: () => void }) {
  const sheetRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!svc) return
    // Move focus into the dialog, trap Tab inside it, restore focus on close.
    const opener = document.activeElement as HTMLElement | null
    const sheet = sheetRef.current
    const focusables = () =>
      sheet
        ? Array.from(
            sheet.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          )
        : []
    focusables()[0]?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "Tab") {
        const els = focusables()
        if (!els.length) return
        const first = els[0]
        const last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
      opener?.focus?.()
    }
  }, [svc, onClose])
  if (!svc) return null
  const stats = [
    { n: svc.subs.length, l: svc.subs.length === 1 ? "Service" : "Services" },
    { n: "1995", l: "Established" },
    { n: "By hand", l: "Finish" },
    { n: "Soon", l: "Pricing" },
  ]
  return (
    <div className="svc-ov" role="dialog" aria-modal="true" aria-label={svc.title}>
      <div className="svc-ov-scrim" onClick={onClose} />
      <div className="svc-ov-sheet" ref={sheetRef}>
        <button className="svc-ov-close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={20} />
        </button>
        <div className="so-hero">
          <div className="so-hero-text">
            <span className="so-eyebrow">
              <span className="so-eb-ico">
                <Icon name={svc.icon} size={16} />
              </span>
              Service
            </span>
            <h2>{svc.title}</h2>
            <p className="so-desc">
              {svc.blurb}
              {svc.note ? " " + svc.note : ""}
            </p>
            <p className="so-lorem">{svc.details}</p>
            <div className="so-cta">
              <Btn variant="primary" size="lg" href="/contact" icon="phone">
                Book Now
              </Btn>
              <Btn variant="secondary" size="lg" href="tel:6266294916" icon="phone-call">
                (626) 629-4916
              </Btn>
              <Btn variant="ghost" size="lg" href={svc.href} iconRight="arrow-right">
                Explore full page
              </Btn>
            </div>
          </div>
          <div className="so-hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={svc.img} alt={svc.title} loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="so-stats">
          {stats.map((s) => (
            <div className="so-stat" key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="so-included">
          <div className="so-label">What&apos;s included</div>
          <div className="so-subs">
            {svc.subs.map((s, i) => (
              <div
                className={
                  "so-sub" +
                  (s.featured ? " feat" : "") +
                  (svc.subs.length === 1 ? " solo" : "")
                }
                key={i}
              >
                {s.featured ? (
                  <span className="so-feat-star" aria-hidden="true">
                    <Icon name="star" size={15} />
                  </span>
                ) : null}
                <span className="so-sub-ic">
                  <Icon name="check" size={16} />
                </span>
                <div className="so-sub-body">
                  {s.featured ? <div className="so-fav">Customer Favorite</div> : null}
                  <div className="nm">{s.nm}</div>
                  <div className="ds">{s.ds}</div>
                </div>
                <span className="pr">Pricing soon</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export type ServicesProps = {
  eyebrow: string
  heading: string
  intro: string
  services: Service[]
}

export function Services(p: ServicesProps) {
  const SERVICES = p.services
  const [open, setOpen] = useState(-1)
  return (
    <section className="section alt" id="services">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h2>{p.heading}</h2>
          <p>{p.intro}</p>
        </Reveal>
        <div className="svc-grid">
          {SERVICES.map((svc, n) => (
            <ServiceCard
              key={n}
              svc={svc}
              active={open === n}
              onClick={() => setOpen(n)}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
          <Btn variant="primary" size="lg" href="/contact" icon="phone">
            Book a service
          </Btn>
        </div>
      </div>
      <ServiceOverlay svc={open >= 0 ? SERVICES[open] : null} onClose={() => setOpen(-1)} />
    </section>
  )
}
