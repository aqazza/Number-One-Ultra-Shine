"use client"

import { useEffect, useState } from "react"
import { Icon } from "./icon"
import { Btn, Eyebrow } from "./ui"
import { Reveal } from "./reveal"

// Placeholder body copy: swap for the owner's real service descriptions.
const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo."

type Sub = { nm: string; ds: string }
type Service = {
  icon: string
  title: string
  img: string
  blurb: string
  note?: string
  subs: Sub[]
}

const SERVICES: Service[] = [
  {
    icon: "sparkles",
    title: "Interior Detailing",
    img: "/photos/interior-cleanup.webp",
    blurb:
      "A complete cabin reset: vacuumed, shampooed, and hand-wiped until every surface looks and feels new.",
    subs: [
      { nm: "Interior Express", ds: "Vacuum, full wipe-down & glass" },
      { nm: "Seats Shampoo", ds: "Deep shampoo & hot-water extraction" },
      { nm: "Carpet Shampoo", ds: "Carpets, mats & footwells" },
      { nm: "Full Interior Detail", ds: "The complete cabin reset, top to bottom" },
    ],
  },
  {
    icon: "car",
    title: "Exterior",
    img: "/photos/exterior-wash.webp",
    blurb:
      "Decontaminate, correct, and protect your paint for a deep, mirror-like finish that lasts.",
    subs: [
      { nm: "Clay & Spray Wax", ds: "Decontaminate & quick-protect the paint" },
      { nm: "Clay & Hand Wax", ds: "Clay bar followed by a hand-applied wax" },
      { nm: "Full Exterior Detail", ds: "Wash, clay, polish & protect" },
      { nm: "Paint Correction (Polishing)", ds: "Multi-stage cut to remove swirls & oxidation" },
    ],
  },
  {
    icon: "droplets",
    title: "Full Details",
    img: "/photos/detailing-station.webp",
    note: "Interior + Exterior combined, our most complete package.",
    blurb:
      "Everything we do, in one visit. Interior and exterior services combined for the most complete transformation.",
    subs: [
      { nm: "Complete Interior Detail", ds: "Every interior service, included" },
      { nm: "Complete Exterior Detail", ds: "Wash, clay, polish & protect" },
      { nm: "Premium Clay & Hand Wax", ds: "A deep, hand-finished gloss" },
      { nm: "Full Interior Shampoo", ds: "Seats, carpets & mats refreshed" },
    ],
  },
  {
    icon: "shield-check",
    title: "Ceramic Coating",
    img: "/photos/closeup-care-2.webp",
    note: "A long-term coating, not a wax. Lasting gloss & protection.",
    blurb:
      "A durable ceramic layer that bonds to your paint, with years of gloss, water-beading, and easier washes.",
    subs: [
      { nm: "1-Year Protection", ds: "Entry ceramic coating with strong gloss" },
      { nm: "3-Year Protection", ds: "Durable multi-layer coating" },
      { nm: "4-Year Protection", ds: "Our longest-lasting ceramic protection" },
    ],
  },
]

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
          <span className="svc-count">{svc.subs.length} services</span>
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
  useEffect(() => {
    if (!svc) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [svc, onClose])
  if (!svc) return null
  const stats = [
    { n: svc.subs.length, l: "Services" },
    { n: "1995", l: "Established" },
    { n: "By hand", l: "Finish" },
    { n: "Soon", l: "Pricing" },
  ]
  return (
    <div className="svc-ov" role="dialog" aria-modal="true" aria-label={svc.title}>
      <div className="svc-ov-scrim" onClick={onClose} />
      <div className="svc-ov-sheet">
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
            <p className="so-lorem">{LOREM}</p>
            <div className="so-cta">
              <Btn variant="primary" size="lg" href="/contact" icon="phone">
                Book Now
              </Btn>
              <Btn variant="secondary" size="lg" href="tel:6266294916" icon="phone-call">
                (626) 629-4916
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
            {svc.subs.map((s) => (
              <div className="so-sub" key={s.nm}>
                <span className="so-sub-ic">
                  <Icon name="check" size={16} />
                </span>
                <div className="so-sub-body">
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

export function Services() {
  const [open, setOpen] = useState(-1)
  return (
    <section className="section alt" id="services">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>What we do</Eyebrow>
          <h2>Services built around your vehicle</h2>
          <p>
            Four ways we make your car shine. Tap any one to see what&apos;s included. Pricing
            arrives soon.
          </p>
        </Reveal>
        <div className="svc-grid">
          {SERVICES.map((svc, n) => (
            <ServiceCard
              key={svc.title}
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
