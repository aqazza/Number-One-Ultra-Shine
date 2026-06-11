import { Eyebrow } from "@/components/site/ui"
import { Reveal } from "@/components/site/reveal"

// About page sections, extracted verbatim from app/about/page.tsx so Puck can
// edit their CONTENT. Markup, classes and styling are intentionally untouched;
// only copy/images flow in via props. Design stays locked in CSS.

export type AboutHeroProps = {
  eyebrow: string
  heading: string
  headingAccent: string
  para1: string
  para2: string
  signName: string
  signRole: string
  mainImg: string
  mainImgAlt: string
  subImg: string
  subImgAlt: string
  badgeNumber: string
  badgeLabel: string
  ghostYear: string
}

export function AboutHero(p: AboutHeroProps) {
  return (
    <section className="ab-hero">
      <span className="ab-ghost" aria-hidden="true">
        {p.ghostYear}
      </span>
      <div className="wrap">
        <div className="ab-hero-grid">
          <Reveal tag="div">
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <h1>
              {p.heading} <span className="accent">{p.headingAccent}</span>
            </h1>
            <p>{p.para1}</p>
            <p>{p.para2}</p>

            <div className="ab-sign">
              <span className="ab-sign-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ultra-shine-mark.webp" alt="" width={26} height={26} />
              </span>
              <div>
                <div className="ab-sign-name">{p.signName}</div>
                <div className="ab-sign-role">{p.signRole}</div>
              </div>
            </div>
          </Reveal>

          <Reveal tag="div" delay={120}>
            <div className="ab-collage">
              <div className="ab-collage-main">
                <span className="ab-shine" aria-hidden="true" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.mainImg} alt={p.mainImgAlt} />
              </div>
              <div className="ab-collage-sub">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.subImg} alt={p.subImgAlt} />
              </div>
              <div className="ab-badge">
                <div className="ab-badge-n">{p.badgeNumber}</div>
                <div className="ab-badge-l">{p.badgeLabel}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export type StatsBandProps = {
  stats: { n: string; l: string }[]
}

export function StatsBand(p: StatsBandProps) {
  return (
    <section className="ab-stats-wrap">
      <div className="wrap">
        <Reveal className="ab-stats" tag="div">
          {p.stats.map((s) => (
            <div className="ab-stat" key={s.l}>
              <div className="ab-stat-n">{s.n}</div>
              <div className="ab-stat-l">{s.l}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export type StandardsProps = {
  eyebrow: string
  heading: string
  intro: string
  cards: { t: string; p: string; stat: string; img: string }[]
}

export function Standards(p: StandardsProps) {
  return (
    <section className="section alt">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h2>{p.heading}</h2>
          <p>{p.intro}</p>
        </Reveal>
        <div className="ab-feats">
          {p.cards.map((c, i) => (
            <Reveal className="ab-feat" tag="article" key={c.t} delay={i * 90}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="ab-feat-img" src={c.img} alt="" loading="lazy" decoding="async" />
              <span className="ab-feat-grad" aria-hidden="true" />
              <div className="ab-feat-body">
                <span className="ab-feat-no">{"0" + (i + 1)}</span>
                <h3>{c.t}</h3>
                <p>{c.p}</p>
                <span className="ab-feat-stat">
                  <span className="dot" />
                  {c.stat}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export type TimelineProps = {
  eyebrow: string
  heading: string
  items: { yr: string; t: string; p: string; img: string; hl: string }[]
}

export function Timeline(p: TimelineProps) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h2>{p.heading}</h2>
        </Reveal>
        <div className="ab-eras">
          {p.items.map((it, i) => (
            <Reveal className="ab-era" tag="div" key={it.yr} delay={i * 130}>
              <div className="ab-era-text">
                <h3>{it.t}</h3>
                <p>{it.p}</p>
                <div className="ab-era-hl">
                  <strong>Milestone</strong>
                  <span>{it.hl}</span>
                </div>
              </div>
              <div className="ab-era-mid">
                <span className="ab-era-badge">{it.yr}</span>
              </div>
              <div className="ab-era-photo">
                <div className="ab-era-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.img} alt="" loading="lazy" decoding="async" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export type FamilyNoteProps = {
  photo: string
  photoAlt: string
  quote: string
  quoteAccent: string
  copy: string
  signName: string
}

export function FamilyNote(p: FamilyNoteProps) {
  return (
    <section className="section alt fam" aria-labelledby="fam-heading">
      <div className="wrap">
        <Reveal className="fam-grid" tag="div">
          {/* LEFT: portrait + reflection + spinning detailing crest */}
          <div className="fam-portrait">
            <div className="fam-portrait-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="fam-photo"
                src={p.photo}
                loading="lazy"
                decoding="async"
                alt={p.photoAlt}
              />
            </div>
            {/* polished-surface reflection */}
            <span className="fam-reflect" aria-hidden="true" />

            {/* chrome detailing crest, decorative */}
            <div className="fam-crest" aria-hidden="true">
              <svg className="fam-crest-ring" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="famRingPath" d="M100,20 a80,80 0 1,1 -0.001,0" />
                </defs>
                <circle className="fam-crest-band" cx="100" cy="100" r="94" />
                <circle className="fam-crest-band" cx="100" cy="100" r="66" />
                <text className="fam-crest-text">
                  <textPath href="#famRingPath" startOffset="0" textLength="498" lengthAdjust="spacing">
                    ● NUMBER ONE ULTRA SHINE ● FAMILY-OWNED SINCE 1995 ●
                  </textPath>
                </text>
              </svg>
              {/* center badge, same glossy mark as the nav logo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="fam-crest-badge" src="/ultra-shine-mark.webp" alt="" width={46} height={46} loading="lazy" decoding="async" />
            </div>
          </div>

          {/* RIGHT: editorial note from the family */}
          <div className="fam-note">
            <h2 id="fam-heading" className="sr-only">
              A note from the family
            </h2>
            <Eyebrow>From the family</Eyebrow>
            <span className="fam-q" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="fam-quote">
              {p.quote} <span className="accent">{p.quoteAccent}</span>
            </blockquote>
            <p className="fam-copy">{p.copy}</p>
            <div className="fam-sign">
              <span className="fam-sign-name">{p.signName}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
