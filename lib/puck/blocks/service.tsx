import type { ComponentConfig } from "@measured/puck"
import {
  ServiceHero,
  ServiceIncluded,
  ServiceProcess,
  ServiceWork,
  ServiceCta,
  type ServiceHeroProps,
  type ServiceIncludedProps,
  type ServiceProcessProps,
  type ServiceWorkProps,
  type ServiceCtaProps,
} from "@/components/site/service-detail"
import { INTERIOR } from "@/lib/puck/service-content"
import { HIDDEN_FIELD, hideable, img, type Hideable } from "./shared"

// One shared block set for all four /services/* pages; each page differs
// only by its seed data.

export type ServiceBlockProps = {
  ServiceHero: Hideable & ServiceHeroProps
  ServiceIncluded: Hideable & ServiceIncludedProps
  ServiceProcess: Hideable & ServiceProcessProps
  ServiceWork: Hideable & ServiceWorkProps
  ServiceCta: Hideable & ServiceCtaProps
}

export const SERVICE_IMAGE_FIELDS: Record<string, string[]> = {
  ServiceHero: ["heroImg"],
  ServiceWork: ["gallery.src"],
}

const SERVICE_ICONS = ["sparkles", "car", "droplets", "shield-check", "gem", "spray-can", "hand-heart", "brush", "award"]
const ZONES = ["floor", "seats", "dash", "cabin", "body", "wheels", "glass", "all"]

const iconSelect = (label: string) => ({
  type: "select" as const,
  label,
  options: SERVICE_ICONS.map((o) => ({ label: o, value: o })),
})

const serviceHero: ComponentConfig<ServiceBlockProps["ServiceHero"]> = {
  label: "Service hero",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    title: { type: "text", label: "Title" },
    blurb: { type: "textarea", label: "Blurb" },
    heroImg: img("Hero image"),
    icon: iconSelect("Floating icon"),
    stats: {
      type: "array",
      label: "Stats",
      arrayFields: {
        n: { type: "text", label: "Number" },
        l: { type: "text", label: "Label" },
      },
      defaultItemProps: { n: "0", l: "New stat" },
      getItemSummary: (item) => `${item.n} — ${item.l}`,
    },
  },
  defaultProps: { hidden: "show", ...INTERIOR.hero },
  render: hideable(ServiceHero),
}

const serviceIncluded: ComponentConfig<ServiceBlockProps["ServiceIncluded"]> = {
  label: "What's included (tiers)",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    intro: { type: "textarea", label: "Intro" },
    includes: {
      type: "array",
      label: "Tiers",
      arrayFields: {
        nm: { type: "text", label: "Name" },
        ds: { type: "textarea", label: "Description" },
        icon: iconSelect("Icon"),
        featured: {
          type: "radio",
          label: "Customer favorite",
          options: [
            { label: "No", value: false },
            { label: "Yes", value: true },
          ],
        },
        points: {
          type: "array",
          label: "Checklist",
          arrayFields: { text: { type: "text", label: "Point" } },
          defaultItemProps: { text: "" },
          getItemSummary: (item) => item.text || "Point",
        },
      },
      defaultItemProps: {
        nm: "New tier",
        ds: "",
        icon: "sparkles",
        featured: false,
        points: [],
      },
      getItemSummary: (item) => item.nm,
    },
  },
  defaultProps: { hidden: "show", ...INTERIOR.included },
  render: hideable(ServiceIncluded),
}

const serviceProcess: ComponentConfig<ServiceBlockProps["ServiceProcess"]> = {
  label: "Process (vehicle scanner)",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    intro: { type: "textarea", label: "Intro" },
    scanTag: { type: "text", label: "Scanner corner tag" },
    steps: {
      type: "array",
      label: "Steps",
      arrayFields: {
        t: { type: "text", label: "Title" },
        p: { type: "textarea", label: "Body" },
        zone: {
          type: "select",
          label: "Highlighted zone",
          options: ZONES.map((z) => ({ label: z, value: z })),
        },
      },
      defaultItemProps: { t: "New step", p: "", zone: "all" },
      getItemSummary: (item) => item.t,
    },
  },
  defaultProps: { hidden: "show", ...INTERIOR.process },
  render: hideable(ServiceProcess),
}

const serviceWork: ComponentConfig<ServiceBlockProps["ServiceWork"]> = {
  label: "Gallery (expanding panels)",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    gallery: {
      type: "array",
      label: "Panels",
      arrayFields: {
        src: img("Photo"),
        tag: { type: "text", label: "Tag chip" },
        caption: { type: "text", label: "Caption" },
      },
      defaultItemProps: { src: "/photos/detailing-station.webp", tag: "New", caption: "" },
      getItemSummary: (item) => item.tag,
    },
  },
  defaultProps: { hidden: "show", ...INTERIOR.work },
  render: hideable(ServiceWork),
}

const serviceCta: ComponentConfig<ServiceBlockProps["ServiceCta"]> = {
  label: "CTA band",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    ctaTitle: { type: "text", label: "Title" },
    ctaText: { type: "textarea", label: "Text" },
  },
  defaultProps: { hidden: "show", ...INTERIOR.cta },
  render: hideable(ServiceCta),
}

export const serviceBlocks = {
  ServiceHero: serviceHero,
  ServiceIncluded: serviceIncluded,
  ServiceProcess: serviceProcess,
  ServiceWork: serviceWork,
  ServiceCta: serviceCta,
}
