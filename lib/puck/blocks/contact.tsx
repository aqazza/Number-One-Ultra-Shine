import type { ComponentConfig } from "@measured/puck"
import { ContactHero, ContactMain, type ContactHeroProps, type ContactMainProps } from "@/components/site/contact"
import { CONTACT_HERO, CONTACT_MAIN } from "@/lib/puck/contact-content"
import { HIDDEN_FIELD, hideable, type Hideable } from "./shared"

export type ContactBlockProps = {
  ContactHero: Hideable & ContactHeroProps
  ContactMain: Hideable & ContactMainProps
}

export const CONTACT_IMAGE_FIELDS: Record<string, string[]> = {}

const detailsField = {
  type: "object" as const,
  label: "Contact details",
  objectFields: {
    phone: { type: "text" as const, label: "Phone" },
    address: { type: "text" as const, label: "Address" },
    email: { type: "text" as const, label: "Email" },
  },
}

const contactHero: ComponentConfig<ContactBlockProps["ContactHero"]> = {
  label: "Contact hero",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    headingTop: { type: "text", label: "Heading line 1" },
    headingAccent: { type: "text", label: "Heading accent (cyan)" },
    intro: { type: "textarea", label: "Intro" },
    details: detailsField,
  },
  defaultProps: { hidden: "show", ...CONTACT_HERO },
  render: hideable(ContactHero),
}

const contactMain: ComponentConfig<ContactBlockProps["ContactMain"]> = {
  label: "Contact info + form",
  fields: {
    hidden: HIDDEN_FIELD,
    infoTitle: { type: "text", label: "Info card title" },
    note: { type: "textarea", label: "Hours note" },
    mapQuery: { type: "text", label: "Map search query" },
    formTitle: { type: "text", label: "Form card title" },
    details: detailsField,
  },
  defaultProps: { hidden: "show", ...CONTACT_MAIN },
  render: hideable(ContactMain),
}

export const contactBlocks = {
  ContactHero: contactHero,
  ContactMain: contactMain,
}
