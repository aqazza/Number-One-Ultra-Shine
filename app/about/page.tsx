import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Eyebrow } from "@/components/site/ui"
import { Reveal } from "@/components/site/reveal"

export const metadata: Metadata = {
  title: "About · Family-Run Since 1995 | Number One Ultra Shine",
  description:
    "Number One Ultra Shine is a family-run auto-detailing shop in Glendora, CA, hand-finishing vehicles since 1995. Meet the team and our standards.",
}

function AboutHero() {
  return (
    <section className="ab-hero">
      <span className="ab-ghost" aria-hidden="true">
        1995
      </span>
      <div className="wrap">
        <div className="ab-hero-grid">
          <Reveal tag="div">
            <Eyebrow>Family-owned since 1995</Eyebrow>
            <h1>
              A family shop that treats every car <span className="accent">like its own.</span>
            </h1>
            <p>
              Number One Ultra Shine opened its doors in Glendora in 1995. More than thirty years
              later, we&apos;re still here, same care, same standards, the same belief that a properly
              detailed car is worth doing right.
            </p>
            <p>
              We&apos;re not a conveyor wash. Every vehicle is washed, clayed, polished and protected
              by hand, by people who take pride in the finish.
            </p>

            <div className="ab-sign">
              <span className="ab-sign-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ultra-shine-mark.webp" alt="" width={26} height={26} />
              </span>
              <div>
                <div className="ab-sign-name">The Ultra Shine family</div>
                <div className="ab-sign-role">Owners &amp; detailers, Glendora CA</div>
              </div>
            </div>
          </Reveal>

          <Reveal tag="div" delay={120}>
            <div className="ab-collage">
              <div className="ab-collage-main">
                <span className="ab-shine" aria-hidden="true" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/photos/detailing-station.webp" alt="Detailer hand-finishing a car in the Glendora shop" />
              </div>
              <div className="ab-collage-sub">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/photos/closeup-care-1.webp" alt="Close-up of hand polishing work" />
              </div>
              <div className="ab-badge">
                <div className="ab-badge-n">30+</div>
                <div className="ab-badge-l">Years on Route 66</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function StatsBand() {
  const stats = [
    { n: "30+", l: "Years detailing" },
    { n: "10,000+", l: "Cars hand-finished" },
    { n: "5.0★", l: "Customer rating" },
    { n: "1", l: "Family, since day one" },
  ]
  return (
    <section className="ab-stats-wrap">
      <div className="wrap">
        <Reveal className="ab-stats" tag="div">
          {stats.map((s) => (
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

function Standards() {
  const cards = [
    {
      t: "Done by hand",
      p: "No automated tunnels. Every wash, polish and coating is applied by an experienced detailer who treats your paint like their own.",
      stat: "0 automated tunnels",
      img: "/photos/closeup-care-1.webp",
    },
    {
      t: "Eco-conscious",
      p: "Biodegradable products and water-reclamation practices that respect Glendora, its water, and its people.",
      stat: "100% biodegradable",
      img: "/photos/exterior-wash.webp",
    },
    {
      t: "Premium products",
      p: "Only high-quality compounds, waxes and ceramic coatings, the stuff that actually lasts past the first rain.",
      stat: "5-yr ceramic protection",
      img: "/photos/closeup-care-2.webp",
    },
  ]
  return (
    <section className="section alt">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>What we stand for</Eyebrow>
          <h2>Our standards</h2>
          <p>Three commitments that have kept customers coming back for thirty years.</p>
        </Reveal>
        <div className="ab-feats">
          {cards.map((c, i) => (
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

function Timeline() {
  const items = [
    {
      yr: "1995",
      t: "Where it all started",
      p: "We opened on Route 66 with one bay, a few buckets, and a simple promise: treat every car that rolls in like it's our own. Three decades later, that promise hasn't changed.",
      img: "/photos/detailing-station.webp",
      hl: "Founded on Route 66 in Glendora, California.",
    },
    {
      yr: "2000s",
      t: "Our regulars became family",
      p: "Folks started bringing us their daily drivers, their weekend toys, and the cars they'd had since high school. They trusted us to keep them looking their best, and we've never taken that for granted.",
      img: "/photos/exterior-wash.webp",
      hl: "A reputation built entirely on word of mouth.",
    },
    {
      yr: "2010s",
      t: "We grew with you",
      p: "As you asked for more, we learned more, adding paint correction and long-lasting ceramic coatings so your car stays protected and shining long after you leave our shop.",
      img: "/photos/closeup-care-2.webp",
      hl: "Added paint correction and ceramic coatings.",
    },
    {
      yr: "Today",
      t: "Still the same family",
      p: "You'll still find us behind the buffer, finishing every car by hand. We know most of our customers by name, and there's no better feeling than handing back the keys to a car that looks brand new. We'd love to add you to the family.",
      img: "/photos/interior-cleanup.webp",
      hl: "Still 100% family-run, three decades on.",
    },
  ]
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>Our story</Eyebrow>
          <h2>Three decades on Route 66</h2>
        </Reveal>
        <div className="ab-eras">
          {items.map((it, i) => (
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

function FamilyNote() {
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
                src="/photos/family-detailing.webp"
                loading="lazy"
                decoding="async"
                alt="A Number One Ultra Shine detailer cleaning a luxury car seat with a detailing brush and foam"
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
              When a car leaves our bay, it leaves the way we&apos;d want our own to:{" "}
              <span className="accent">nothing rushed, nothing skipped.</span>
            </blockquote>
            {/* TODO: replace with real family-history copy */}
            <p className="fam-copy">
              Two generations have worked these bays on Route 66. We learned the trade from the
              people who started it, and we still hand-finish every car the way they taught us. Hand
              us your keys and you&apos;re trusting family. We don&apos;t take that lightly.
            </p>
            <div className="fam-sign">
              {/* TODO: replace with the real owner's name, or swap for a scanned signature:
                  <img className="fam-sign-img" src="/photos/signature.png" alt="Owner's signature" /> */}
              <span className="fam-sign-name">Amr Moubasher</span>
              <span className="fam-sign-role">Second-generation owner</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="About" />
        <AboutHero />
        <StatsBand />
        <Standards />
        <Timeline />
        <FamilyNote />
        <Footer />
      </div>
    </>
  )
}
