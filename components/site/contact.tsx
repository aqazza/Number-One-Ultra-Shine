"use client"

import { useRef, useState, type FormEvent, type MouseEvent } from "react"
import { Icon } from "./icon"
import { Btn, Eyebrow } from "./ui"
import { Reveal } from "./reveal"

function MessageForm({
  includeEmail = false,
  size,
}: {
  includeEmail?: boolean
  size?: "lg"
}) {
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const submit = (e: FormEvent | MouseEvent) => {
    e.preventDefault()
    const form = formRef.current
    if (form) {
      const data = new FormData(form)
      const get = (k: string) => ((data.get(k) as string) || "").trim()
      const name = get("name")
      const lines = [
        `Name: ${name}`,
        `Phone: ${get("phone")}`,
        includeEmail ? `Email: ${get("email")}` : null,
        `Vehicle & service: ${get("vehicle")}`,
        "",
        get("message"),
      ].filter((l) => l !== null)
      const subject = `Detailing inquiry${name ? ` from ${name}` : ""}`
      const url =
        "https://mail.google.com/mail/?view=cm&fs=1&to=1ultrashine@gmail.com" +
        `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`
      window.open(url, "_blank", "noopener,noreferrer")
    }
    setSent(true)
  }
  return (
    <form ref={formRef} onSubmit={submit}>
      <div className="form-grid">
        <div className="uss-field">
          <label className="uss-label">Name</label>
          <input className="uss-input" name="name" placeholder="Jane Doe" required />
        </div>
        <div className="uss-field">
          <label className="uss-label">Phone</label>
          <input className="uss-input" name="phone" placeholder="(000) 000-0000" />
        </div>
        {includeEmail && (
          <div className="uss-field full">
            <label className="uss-label">Email</label>
            <input className="uss-input" name="email" type="email" placeholder="you@email.com" />
          </div>
        )}
        <div className="uss-field full">
          <label className="uss-label">Vehicle &amp; service</label>
          <input className="uss-input" name="vehicle" placeholder="e.g. 2019 sedan, full detail" />
        </div>
        <div className="uss-field full">
          <label className="uss-label">How can we help?</label>
          <textarea className="uss-textarea" name="message" placeholder="Tell us what you're after…" />
        </div>
        <div className="full">
          <Btn variant="primary" size={size} href="#" onClick={submit} iconRight="arrow-right">
            Send message
          </Btn>
          {sent && (
            <div className="sent">
              <Icon name="check-circle-2" size={18} />
              Thanks, we&apos;ll be in touch shortly.
            </div>
          )}
        </div>
      </div>
    </form>
  )
}

export type ContactDetails = { phone: string; address: string; email: string }

function ContactInfo({ phone, address, email }: ContactDetails) {
  return (
    <>
      <a className="crow" href={"tel:" + phone.replace(/\D/g, "")}>
        <span className="ci">
          <Icon name="phone" size={20} />
        </span>
        <div>
          <div className="ck">Call us</div>
          <div className="cv">{phone}</div>
        </div>
      </a>
      <a
        className="crow"
        href={"https://maps.google.com/?q=" + encodeURIComponent(address)}
        target="_blank"
        rel="noreferrer"
      >
        <span className="ci">
          <Icon name="map-pin" size={20} />
        </span>
        <div>
          <div className="ck">Visit us</div>
          <div className="cv">{address}</div>
        </div>
      </a>
      <a
        className="crow"
        href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
        target="_blank"
        rel="noreferrer"
      >
        <span className="ci">
          <Icon name="mail" size={20} />
        </span>
        <div>
          <div className="ck">Email us</div>
          <div className="cv">{email}</div>
        </div>
      </a>
    </>
  )
}

// Home page #contact section
export type HomeContactProps = {
  eyebrow: string
  heading: string
  intro: string
  infoTitle: string
  formTitle: string
  details: ContactDetails
}

export function HomeContact(p: HomeContactProps) {
  return (
    <section className="section alt" id="contact">
      <div className="wrap">
        <Reveal className="sec-head" tag="div">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h2>{p.heading}</h2>
          <p>{p.intro}</p>
        </Reveal>
        <div className="contact-grid">
          <Reveal tag="div">
            <div className="uss-card contact">
              <div className="pad">
                <h3>{p.infoTitle}</h3>
                <ContactInfo {...p.details} />
              </div>
            </div>
          </Reveal>
          <Reveal tag="div" delay={120}>
            <div className="uss-card contact">
              <div className="pad">
                <h3>{p.formTitle}</h3>
                <MessageForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// Contact page hero
export function ContactHero() {
  return (
    <section className="ct-hero">
      <div className="wrap">
        <Reveal className="ct-hero-in" tag="div">
          <Eyebrow>Get in touch</Eyebrow>
          <h1>
            Let&apos;s make your<br />
            <span className="accent">car shine.</span>
          </h1>
          <p>
            Drop by the shop on Route 66, give us a call, or send a message below. We&apos;ll get you
            booked for the detail your vehicle deserves.
          </p>
          <div className="ct-quick">
            <a className="chip" href="tel:6266294916">
              <Icon name="phone" size={16} />
              (626) 629-4916
            </a>
            <a
              className="chip"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=1ultrashine@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="mail" size={16} />
              1ultrashine@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Contact page main (info + map + full form with email)
export function ContactMain() {
  return (
    <section className="section ct-main">
      <div className="wrap">
        <div className="contact-grid">
          <Reveal tag="div">
            <div className="uss-card contact">
              <div className="pad">
                <h3>Visit or reach out</h3>
                <ContactInfo phone="(626) 629-4916" address="525 E Route 66, Glendora, CA 91740" email="1ultrashine@gmail.com" />
                <div className="ct-note">
                  <Icon name="clock" size={16} />
                  <span>
                    Hours vary, so call ahead and we&apos;ll make sure we&apos;re ready for you.
                    Detailing excellence since 1995.
                  </span>
                </div>
              </div>
            </div>
            <div className="ct-map">
              <iframe
                className="ct-map-frame"
                src="https://www.google.com/maps?q=Route+66+Car+Wash,+525+E+Route+66,+Glendora,+CA+91740&output=embed"
                title="Map to Number One Ultra Shine at 525 E Route 66, Glendora, CA"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                className="ct-map-open"
                href="https://www.google.com/maps/search/?api=1&query=Route+66+Car+Wash%2C+525+E+Route+66%2C+Glendora%2C+CA+91740"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="map-pin" size={16} />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal tag="div" delay={120}>
            <div className="uss-card contact">
              <div className="pad">
                <h3>Send a message</h3>
                <MessageForm includeEmail size="lg" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
