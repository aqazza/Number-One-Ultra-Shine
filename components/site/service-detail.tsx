import { Icon } from "./icon"
import { Btn, Eyebrow } from "./ui"
import { Reveal } from "./reveal"
import { CabinScanner, type ScanStep, type ScanZone } from "./cabin-scanner"
import { ExpandGallery, type GalleryItem } from "./expand-gallery"

// Data-driven service page. Build one object per service and pass it in;
// the layout below stays identical so all four service pages match.
export type ServiceInclude = {
  nm: string
  ds: string
  featured?: boolean
  icon?: string
  points?: string[]
}
export type ServiceStep = { t: string; p: string; zone?: ScanZone }
export type ServiceDetailData = {
  eyebrow: string
  title: string
  blurb: string
  heroImg: string
  icon: string
  stats: { n: string; l: string }[]
  includes: ServiceInclude[]
  steps: ServiceStep[]
  scanTag?: string
  gallery: GalleryItem[]
  ctaTitle: string
  ctaText: string
}

const PHONE = "(626) 629-4916"

export function ServiceDetail({ data }: { data: ServiceDetailData }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="svp-hero">
        <div className="wrap">
          <div className="svp-hero-grid">
            <Reveal className="svp-hero-text" tag="div">
              <Eyebrow>{data.eyebrow}</Eyebrow>
              <h1>{data.title}</h1>
              <p className="lead">{data.blurb}</p>
              <div className="svp-cta">
                <Btn variant="primary" size="lg" href="/contact" icon="phone">
                  Book Now
                </Btn>
                <Btn variant="secondary" size="lg" href="tel:6266294916" icon="phone-call">
                  {PHONE}
                </Btn>
              </div>
              <div className="svp-stats">
                {data.stats.map((s) => (
                  <div className="svp-stat" key={s.l}>
                    <div className="n">{s.n}</div>
                    <div className="l">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="svp-hero-media" tag="div" delay={120}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.heroImg} alt={data.title} />
              <span className="svp-hero-ic" aria-hidden="true">
                <Icon name={data.icon} size={26} />
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- What's included ---------- */}
      <section className="section alt svp-inc">
        <div className="wrap">
          <Reveal className="sec-head" tag="div">
            <Eyebrow>What&apos;s included</Eyebrow>
            <h2>Everything in this service</h2>
            <p>Choose the level that fits your car. Pricing arrives soon.</p>
          </Reveal>
          <div className="svp-tiers">
            {data.includes.map((inc, i) => (
              <Reveal key={inc.nm} delay={i * 80}>
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
                      {inc.points.map((p) => (
                        <li key={p}>
                          <Icon name="check" size={13} />
                          {p}
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

      {/* ---------- Process ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head" tag="div">
            <Eyebrow>How it works</Eyebrow>
            <h2>What to expect</h2>
            <p>A careful, hand-finished process from the moment you hand us the keys.</p>
          </Reveal>
          {data.steps.every((s) => s.zone) ? (
            <Reveal tag="div">
              <CabinScanner steps={data.steps as ScanStep[]} tag={data.scanTag} />
            </Reveal>
          ) : (
            <div className="svp-steps">
              {data.steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 80}>
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

      {/* ---------- Gallery ---------- */}
      <section className="section alt">
        <div className="wrap">
          <Reveal className="sec-head" tag="div">
            <Eyebrow>The work</Eyebrow>
            <h2>A closer look</h2>
          </Reveal>
          <Reveal tag="div">
            <ExpandGallery items={data.gallery} />
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="svp-band-wrap">
        <div className="wrap">
          <Reveal className="svp-band" tag="div">
            <div className="svp-band-text">
              <Eyebrow>Book today</Eyebrow>
              <h2>{data.ctaTitle}</h2>
              <p>{data.ctaText}</p>
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
    </>
  )
}
