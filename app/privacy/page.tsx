import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Eyebrow } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "Privacy Policy | Number One Ultra Shine",
  description:
    "How Number One Ultra Shine collects, uses, and protects the information you share with us.",
}

export default function PrivacyPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="" />
        <section className="legal">
          <div className="wrap">
            <div className="eyebrow-row">
              <Eyebrow>Your privacy matters</Eyebrow>
            </div>
            <h1>Privacy Policy</h1>
            <p className="updated">Last updated: June 2026</p>

            <p>
              Number One Ultra Shine (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects
              your privacy. This policy explains what information we collect when you visit our
              website or contact us about a detail, how we use it, and the choices you have.
            </p>

            <h2>Information we collect</h2>
            <p>
              We only collect the details you choose to give us. When you submit our contact form or
              call the shop, that may include your name, phone number, email address, vehicle
              details, and any message you send. Our website may also collect basic, anonymous usage
              data such as the pages you view, to help us keep the site working well.
            </p>

            <h2>How we use your information</h2>
            <ul>
              <li>To respond to your questions and schedule your appointment.</li>
              <li>To follow up about a service you requested or received.</li>
              <li>To improve our website and the services we offer.</li>
            </ul>

            <h2>Sharing your information</h2>
            <p>
              We do not sell or rent your personal information. We only share it when required by law
              or with trusted providers who help us operate the business, and only to the extent they
              need it to do that work.
            </p>

            <h2>Data retention and security</h2>
            <p>
              We keep your information only as long as needed to serve you and meet our legal
              obligations, and we take reasonable steps to protect it from loss or misuse.
            </p>

            <h2>Your choices</h2>
            <p>
              You may ask us to access, correct, or delete the personal information we hold about you
              at any time. Just reach out and we will take care of it.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href="mailto:1ultrashine@gmail.com">1ultrashine@gmail.com</a> or call{" "}
              <a href="tel:6266294916">(626) 629-4916</a>. You can also visit us at 525 E Route 66,
              Glendora, CA 91740.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
