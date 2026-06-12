import type { CSSProperties } from "react"
import { Icon } from "./icon"
import { WhyIcon } from "./why-icons"
import { Btn, Eyebrow } from "./ui"
import { Reveal } from "./reveal"

export type TrustBarProps = {
  items: { ic: string; t: string }[]
}

export function TrustBar(p: TrustBarProps) {
  return (
    <div className="trust">
      <div className="wrap">
        {p.items.map((x, i) => (
          <div className="item" key={i}>
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

export type AboutTeaserProps = {
  imgs: { src: string }[]
  badgeNumber: string
  badgeLabel: string
  eyebrow: string
  heading: string
  para1: string
  para2: string
  primaryCta: string
  secondaryCta: string
}

export function AboutTeaser(p: AboutTeaserProps) {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about">
          <Reveal className="imgs" tag="div">
            {p.imgs.map((img, i) => (
              <div className="cell" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt="Detailing work" loading="lazy" decoding="async" />
              </div>
            ))}
            <div className="badge-stat">
              <div className="n">{p.badgeNumber}</div>
              <div className="l">{p.badgeLabel}</div>
            </div>
          </Reveal>
          <Reveal tag="div" delay={120}>
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <h2>{p.heading}</h2>
            <p>{p.para1}</p>
            <p>{p.para2}</p>
            <div className="links">
              <Btn variant="secondary" href="/about" iconRight="arrow-right">
                {p.primaryCta}
              </Btn>
              <Btn variant="ghost" href="/gallery">
                {p.secondaryCta}
              </Btn>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export type WhyUsProps = {
  eyebrow: string
  heading: string
  intro: string
  cards: { ic: string; n: string; t: string; p: string; stat: string; accent: string }[]
}

export function WhyUs(p: WhyUsProps) {
  return (
    <section className="section alt" id="why-us">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h2>{p.heading}</h2>
          <p>{p.intro}</p>
        </Reveal>
        <div className="why-grid">
          {p.cards.map((c, i) => (
            <Reveal key={i} delay={i * 90}>
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
