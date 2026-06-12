import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Eyebrow } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "Accessibility Statement | Number One Ultra Shine",
  description:
    "Number One Ultra Shine is committed to a website that everyone can use. Our site is built to WCAG 2.1 Level AA. Read our accessibility statement.",
}

export default function AccessibilityPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="" />
        <main>
          <section className="legal">
            <div className="wrap">
              <div className="eyebrow-row">
                <Eyebrow>For everyone</Eyebrow>
              </div>
              <h1>Accessibility Statement</h1>
              <p className="updated">Last updated: June 2026</p>

              <p>
                Number One Ultra Shine is committed to making our website usable by everyone,
                including people who rely on assistive technology. We design and test this site
                to conform to the{" "}
                <a
                  href="https://www.w3.org/WAI/WCAG21/quickref/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
                </a>
                , the standard referenced for ADA website accessibility.
              </p>

              <h2>What we do</h2>
              <ul>
                <li>Text and interface colors meet WCAG AA contrast requirements.</li>
                <li>
                  Every interactive element — menus, galleries, sliders and dialogs — can be
                  operated with a keyboard alone.
                </li>
                <li>Images carry descriptive alternative text; decorative graphics are hidden
                  from screen readers.</li>
                <li>
                  Pages use proper landmarks and heading structure for screen-reader
                  navigation.
                </li>
                <li>
                  Animations, auto-playing video and moving content are disabled for visitors
                  whose devices request reduced motion.
                </li>
                <li>Forms have visible labels and clear status messages.</li>
                <li>We re-test the site with automated and manual checks as content changes.</li>
              </ul>

              <h2>Need help or found a problem?</h2>
              <p>
                If any part of this site is hard for you to use, we want to know. Call us at{" "}
                <a href="tel:6266294916">(626) 629-4916</a> or email{" "}
                <a href="mailto:1ultrashine@gmail.com">1ultrashine@gmail.com</a> and we&apos;ll
                fix it or help you book directly. You can also visit us in person at 525 E Route
                66, Glendora, CA 91740.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
