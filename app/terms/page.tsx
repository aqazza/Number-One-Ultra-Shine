import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Eyebrow } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "Terms of Service | Number One Ultra Shine",
  description:
    "The terms that apply when you use the Number One Ultra Shine website and book our detailing services.",
}

export default function TermsPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="" />
        <main>
        <section className="legal">
          <div className="wrap">
            <div className="eyebrow-row">
              <Eyebrow>The fine print</Eyebrow>
            </div>
            <h1>Terms of Service</h1>
            <p className="updated">Last updated: June 2026</p>

            <p>
              These terms apply when you use the Number One Ultra Shine website and when you book or
              receive our detailing services. By using our site or scheduling with us, you agree to
              the terms below.
            </p>

            <h2>Our services</h2>
            <p>
              We provide auto-detailing services including interior, exterior, full details, and
              ceramic coating. Service descriptions and any pricing shown on this site are for general
              information. Final pricing depends on your vehicle&apos;s size, condition, and the
              services you choose, and will be confirmed before any work begins.
            </p>

            <h2>Booking and appointments</h2>
            <p>
              Submitting a contact form or requesting an appointment is a request, not a confirmed
              booking. We will reach out to confirm the date, time, and details. If you need to
              reschedule or cancel, please give us as much notice as you can.
            </p>

            <h2>Your vehicle</h2>
            <ul>
              <li>Please remove valuables and personal items before your appointment.</li>
              <li>
                Let us know about existing damage, sensitive finishes, or aftermarket parts so we can
                treat your vehicle with the right care.
              </li>
              <li>
                Results can vary with the age, condition, and materials of a vehicle. We will always
                tell you what to realistically expect.
              </li>
            </ul>

            <h2>Satisfaction</h2>
            <p>
              We stand behind our work. If something is not right, contact us promptly and we will do
              our best to make it right.
            </p>

            <h2>Website use</h2>
            <p>
              The content on this site, including text, images, and branding, belongs to Number One
              Ultra Shine and may not be copied or reused without our permission. We may update the
              site and these terms from time to time.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about these terms? Email{" "}
              <a href="mailto:1ultrashine@gmail.com">1ultrashine@gmail.com</a> or call{" "}
              <a href="tel:6266294916">(626) 629-4916</a>.
            </p>
          </div>
        </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
