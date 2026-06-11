import type { CSSProperties } from "react"
import { Icon } from "./icon"
import { WhyIcon } from "./why-icons"
import { Btn, Eyebrow } from "./ui"
import { Reveal } from "./reveal"

export function TrustBar() {
  const items = [
    { ic: "award", t: "Satisfaction guaranteed" },
    { ic: "sprout", t: "Eco-friendly products" },
    { ic: "spray-can", t: "Hand-finished detail" },
    { ic: "map-pinned", t: "Glendora, CA" },
  ]
  return (
    <div className="trust">
      <div className="wrap">
        {items.map((x) => (
          <div className="item" key={x.t}>
            <span className="chip">
              <Icon name={x.ic} size={18} />
            </span>
            {x.t}
          </div>
        ))}
      </div>
    </div>
  )
}

export function AboutTeaser() {
  const imgs = [
    "/photos/interior-cleanup.webp",
    "/photos/closeup-care-1.webp",
    "/photos/closeup-care-2.webp",
    "/photos/detailing-station.webp",
  ]
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about">
          <Reveal className="imgs" tag="div">
            {imgs.map((s) => (
              <div className="cell" key={s}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s} alt="Detailing work" loading="lazy" decoding="async" />
              </div>
            ))}
            <div className="badge-stat">
              <div className="n">30+</div>
              <div className="l">Years experience</div>
            </div>
          </Reveal>
          <Reveal tag="div" delay={120}>
            <Eyebrow>Our story</Eyebrow>
            <h2>Three decades of detailing, one family.</h2>
            <p>
              Founded in 1995, Number One Ultra Shine has kept Glendora&apos;s vehicles looking their
              best for over thirty years. We take pride in our attention to detail and our commitment
              to every customer who pulls in.
            </p>
            <p>
              Our experienced team uses only high-quality products and equipment, so your vehicle
              gets the careful, hand-finished work it deserves.
            </p>
            <div className="links">
              <Btn variant="secondary" href="/about" iconRight="arrow-right">
                More about us
              </Btn>
              <Btn variant="ghost" href="/gallery">
                View gallery
              </Btn>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function WhyUs() {
  const cards = [
    { ic: "eco-drop", n: "01", t: "Eco-Friendly", p: "Biodegradable, environmentally safe products and water-reclamation practices that minimize our impact.", stat: "100% biodegradable", accent: "var(--success)" },
    { ic: "buff-swirl", n: "02", t: "Careful Craft", p: "We take the time to do it right, hand-finished work with honest turnaround, never rushed.", stat: "30 yrs hand-finished", accent: "var(--shine-cyan)" },
    { ic: "guard-seal", n: "03", t: "Satisfaction Guaranteed", p: "If you're not completely happy with the result, we'll make it right. Your satisfaction comes first.", stat: "100% satisfaction", accent: "var(--warning)" },
  ]
  return (
    <section className="section alt" id="why-us">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>The #1 Ultra Shine difference</Eyebrow>
          <h2>Why choose us</h2>
          <p>Three decades of craft, real care, and a guarantee that backs every detail.</p>
        </Reveal>
        <div className="why-grid">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="uss-card why" style={{ "--accent": c.accent } as CSSProperties}>
                <span className="bar" />
                <div className="pad">
                  <span className="n">{c.n}</span>
                  <div className="wic">
                    <WhyIcon name={c.ic} size={26} />
                  </div>
                  <h3>{c.t}</h3>
                  <p>{c.p}</p>
                  <span className="stat">{c.stat}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
