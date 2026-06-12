import { Icon } from "./icon"
import { Btn, Eyebrow } from "./ui"
import { Reveal } from "./reveal"
import { CabinScanner, type ScanStep, type ScanZone } from "./cabin-scanner"
import { ExpandGallery, type GalleryItem } from "./expand-gallery"

// Service page sections (shared by all four /services/* pages). Extracted
// verbatim from the former ServiceDetail template so Puck can edit their
// CONTENT; markup, classes and styling are intentionally untouched.

const PHONE = "(626) 629-4916"

export type ServiceHeroProps = {
  eyebrow: string
  title: string
  blurb: string
  heroImg: string
  icon: string
  stats: { n: string; l: string }[]
}

export function ServiceHero(p: ServiceHeroProps) {
  return (
    <section className="svp-hero">
      <div className="wrap">
        <div className="svp-hero-grid">
          <Reveal className="svp-hero-text" tag="div">
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <h1>{p.title}</h1>
            <p className="lead">{p.blurb}</p>
            <div className="svp-cta">
              <Btn variant="primary" size="lg" href="/contact" icon="phone">
                Book Now
              </Btn>
              <Btn variant="secondary" size="lg" href="tel:6266294916" icon="phone-call">
                {PHONE}
              </Btn>
            </div>
            <div className="svp-stats">
              {p.stats.map((s, i) => (
                <div className="svp-stat" key={i}>
                  <div className="n">{s.n}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="svp-hero-media" tag="div" delay={120}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.heroImg} alt={p.title} />
            <span className="svp-hero-ic" aria-hidden="true">
              <Icon name={p.icon} size={26} />
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export type ServiceInclude = {
  nm: string
  ds: string
  featured?: boolean
  icon?: string
  points?: { text: string }[]
}

export type ServiceIncludedProps = {
  eyebrow: string
  heading: string
  intro: string
  includes: ServiceInclude[]
}

export function ServiceIncluded(p: ServiceIncludedProps) {
  return (
    <section className="section alt svp-inc">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h2>{p.heading}</h2>
          <p>{p.intro}</p>
        </Reveal>
        <div className="svp-tiers">
          {p.includes.map((inc, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={"svp-tier" + (inc.featured ? " feat" : "")}>
                {inc.featured ? (
                  <span className="so-feat-star" aria-hidden="true">
                    <Icon name="star" size={15} />
                  </span>
                ) : null}
                <div className="tier-head">
                  <span className="tier-ic">
                    <Icon name={inc.icon ?? "check"} size={22} />
                  </span>
                  <span className="tier-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {inc.featured ? <div className="so-fav">Customer Favorite</div> : null}
                <h3>{inc.nm}</h3>
                <p>{inc.ds}</p>
                {inc.points?.length ? (
                  <ul className="tier-points">
                    {inc.points.map((pt, pi) => (
                      <li key={pi}>
                        <Icon name="check" size={13} />
                        {pt.text}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <span className="tier-pr">Pricing soon</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export type ServiceStep = { t: string; p: string; zone?: ScanZone }

export type ServiceProcessProps = {
  eyebrow: string
  heading: string
  intro: string
  scanTag: string
  steps: ServiceStep[]
}

export function ServiceProcess(p: ServiceProcessProps) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h2>{p.heading}</h2>
          <p>{p.intro}</p>
        </Reveal>
        {p.steps.every((s) => s.zone) ? (
          <Reveal tag="div">
            <CabinScanner steps={p.steps as ScanStep[]} tag={p.scanTag} />
          </Reveal>
        ) : (
          <div className="svp-steps">
            {p.steps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="uss-card svp-step">
                  <div className="pad">
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{s.t}</h3>
                    <p>{s.p}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export type ServiceWorkProps = {
  eyebrow: string
  heading: string
  gallery: GalleryItem[]
}

export function ServiceWork(p: ServiceWorkProps) {
  return (
    <section className="section alt">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h2>{p.heading}</h2>
        </Reveal>
        <Reveal tag="div">
          <ExpandGallery items={p.gallery} />
        </Reveal>
      </div>
    </section>
  )
}

export type ServiceCtaProps = {
  eyebrow: string
  ctaTitle: string
  ctaText: string
}

export function ServiceCta(p: ServiceCtaProps) {
  return (
    <section className="svp-band-wrap">
      <div className="wrap">
        <Reveal className="svp-band" tag="div">
          <div className="svp-band-text">
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <h2>{p.ctaTitle}</h2>
            <p>{p.ctaText}</p>
          </div>
          <div className="svp-band-cta">
            <Btn variant="primary" size="lg" href="/contact" icon="phone">
              Book Now
            </Btn>
            <Btn variant="secondary" size="lg" href="tel:6266294916" icon="phone-call">
              {PHONE}
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
