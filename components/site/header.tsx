"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon } from "./icon"
import { Btn } from "./ui"

export const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
]

function Brand() {
  return (
    <Link className="brand" href="/">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/ultra-shine-mark.webp" alt="Number One Ultra Shine" width={42} height={42} />
      <span style={{ display: "flex", flexDirection: "column" }}>
        <span className="a">
          <span className="one">Number One</span> Ultra Shine
        </span>
        <span className="b">Premium Auto Detailing</span>
      </span>
    </Link>
  )
}

export function Header({ active }: { active?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="hdr">
      <div className="hdr-strip">
        <div className="wrap">
          <div style={{ display: "flex", gap: 28 }}>
            <a
              href="https://maps.google.com/?q=525+E+Route+66+Glendora+CA+91740"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="map-pin" size={14} />
              525 E Route 66, Glendora, CA 91740
            </a>
            <a href="tel:6266294916">
              <Icon name="phone" size={14} />
              (626) 629-4916
            </a>
          </div>
          <span className="tag">Detailing Excellence Since 1995</span>
        </div>
      </div>
      <div className="hdr-bar">
        <div className="wrap">
          <Brand />
          <nav className="nav">
            {NAV.map((n) => (
              <Link
                key={n.label}
                className={"link" + (active === n.label ? " active" : "")}
                href={n.href}
              >
                {n.label}
              </Link>
            ))}
            <Btn variant="primary" size="sm" href="/contact" icon="phone">
              Book Now
            </Btn>
          </nav>
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>
      <div className={"sheet" + (open ? " open" : "")}>
        <div className="scrim" onClick={() => setOpen(false)} />
        <div className="panel">
          <button className="close" onClick={() => setOpen(false)} aria-label="Close menu">
            <Icon name="x" size={24} />
          </button>
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <div style={{ marginTop: 14 }}>
            <Btn variant="primary" href="/contact" icon="phone">
              Book Now
            </Btn>
          </div>
        </div>
      </div>
    </header>
  )
}
