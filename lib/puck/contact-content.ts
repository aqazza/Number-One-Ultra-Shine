import type { ContactHeroProps, ContactMainProps } from "@/components/site/contact"

// The CURRENT contact page content, verbatim — Puck defaults + DB seed source.

const DETAILS = {
  phone: "(626) 629-4916",
  address: "525 E Route 66, Glendora, CA 91740",
  email: "1ultrashine@gmail.com",
}

export const CONTACT_HERO: ContactHeroProps = {
  eyebrow: "Get in touch",
  headingTop: "Let's make your",
  headingAccent: "car shine.",
  intro:
    "Drop by the shop on Route 66, give us a call, or send a message below. We'll get you booked for the detail your vehicle deserves.",
  details: DETAILS,
}

export const CONTACT_MAIN: ContactMainProps = {
  infoTitle: "Visit or reach out",
  note: "Hours vary, so call ahead and we'll make sure we're ready for you. Detailing excellence since 1995.",
  mapQuery: "Route 66 Car Wash, 525 E Route 66, Glendora, CA 91740",
  formTitle: "Send a message",
  details: DETAILS,
}
