import type { ComponentConfig } from "@measured/puck"
import { Hero, type HeroProps } from "@/components/site/hero"
import {
  TrustBar,
  AboutTeaser,
  WhyUs,
  type TrustBarProps,
  type AboutTeaserProps,
  type WhyUsProps,
} from "@/components/site/home-sections"
import { Services, type ServicesProps } from "@/components/site/services"
import { Reviews, type ReviewsProps } from "@/components/site/reviews"
import { HomeContact, type HomeContactProps } from "@/components/site/contact"
import {
  HOME_HERO,
  HOME_TRUST,
  HOME_SERVICES,
  HOME_ABOUT_TEASER,
  HOME_WHY,
  HOME_REVIEWS,
  HOME_CONTACT,
} from "@/lib/puck/home-content"
import { HIDDEN_FIELD, hideable, img, type Hideable } from "./shared"

export type HomeBlockProps = {
  HomeHero: Hideable & HeroProps
  TrustBar: Hideable & TrustBarProps
  Services: Hideable & ServicesProps
  AboutTeaser: Hideable & AboutTeaserProps
  WhyUs: Hideable & WhyUsProps
  Reviews: Hideable & ReviewsProps
  HomeContact: Hideable & HomeContactProps
}

export const HOME_IMAGE_FIELDS: Record<string, string[]> = {
  HomeHero: ["videos.poster"],
  Services: ["services.img"],
  AboutTeaser: ["imgs.src"],
}

const TRUST_ICONS = ["award", "sprout", "spray-can", "map-pinned", "hand-heart", "gem", "leaf", "recycle", "flask-conical"]
const SERVICE_ICONS = ["sparkles", "car", "droplets", "shield-check", "gem", "spray-can", "hand-heart", "brush", "award"]
const WHY_ICONS = ["eco-drop", "buff-swirl", "guard-seal"]

const iconSelect = (label: string, options: string[]) => ({
  type: "select" as const,
  label,
  options: options.map((o) => ({ label: o, value: o })),
})

const homeHero: ComponentConfig<HomeBlockProps["HomeHero"]> = {
  label: "Hero (video)",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    headingTop: { type: "text", label: "Heading line 1" },
    headingMid: { type: "text", label: "Heading line 2 (before accent)" },
    headingAccent: { type: "text", label: "Heading accent (cyan)" },
    lead: { type: "textarea", label: "Lead paragraph" },
    primaryCta: { type: "text", label: "Primary button label" },
    secondaryCta: { type: "text", label: "Secondary button label" },
    videos: {
      type: "array",
      label: "Background clips",
      arrayFields: {
        src: { type: "text", label: "Video file (/videos/…)" },
        poster: img("Poster image"),
      },
      defaultItemProps: { src: "/videos/wash.mp4", poster: "/photos/exterior-wash.webp" },
      getItemSummary: (item) => item.src,
    },
    statNumber: { type: "text", label: "Corner stat number" },
    statLabel: { type: "text", label: "Corner stat label" },
  },
  defaultProps: { hidden: "show", ...HOME_HERO },
  render: hideable(Hero),
}

const trustBar: ComponentConfig<HomeBlockProps["TrustBar"]> = {
  label: "Trust bar",
  fields: {
    hidden: HIDDEN_FIELD,
    items: {
      type: "array",
      label: "Items",
      arrayFields: {
        ic: iconSelect("Icon", TRUST_ICONS),
        t: { type: "text", label: "Text" },
      },
      defaultItemProps: { ic: "award", t: "New item" },
      getItemSummary: (item) => item.t,
    },
  },
  defaultProps: { hidden: "show", ...HOME_TRUST },
  render: hideable(TrustBar),
}

const services: ComponentConfig<HomeBlockProps["Services"]> = {
  label: "Services overview",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    intro: { type: "textarea", label: "Intro" },
    services: {
      type: "array",
      label: "Services",
      arrayFields: {
        icon: iconSelect("Icon", SERVICE_ICONS),
        title: { type: "text", label: "Title" },
        blurb: { type: "textarea", label: "Card blurb" },
        note: { type: "text", label: "Modal note (optional)" },
        details: { type: "textarea", label: "Modal body copy" },
        img: img("Modal image"),
        href: { type: "text", label: "Full page link" },
        subs: {
          type: "array",
          label: "What's included",
          arrayFields: {
            nm: { type: "text", label: "Name" },
            ds: { type: "text", label: "Description" },
            featured: {
              type: "radio",
              label: "Customer favorite",
              options: [
                { label: "No", value: false },
                { label: "Yes", value: true },
              ],
            },
          },
          defaultItemProps: { nm: "New service", ds: "", featured: false },
          getItemSummary: (item) => item.nm,
        },
      },
      defaultItemProps: {
        icon: "sparkles",
        title: "New service",
        blurb: "",
        note: "",
        details: "",
        img: "/photos/detailing-station.webp",
        href: "/contact",
        subs: [],
      },
      getItemSummary: (item) => item.title,
    },
  },
  defaultProps: { hidden: "show", ...HOME_SERVICES },
  render: hideable(Services),
}

const aboutTeaser: ComponentConfig<HomeBlockProps["AboutTeaser"]> = {
  label: "About teaser",
  fields: {
    hidden: HIDDEN_FIELD,
    imgs: {
      type: "array",
      label: "Photo grid",
      arrayFields: { src: img("Photo") },
      defaultItemProps: { src: "/photos/detailing-station.webp" },
      getItemSummary: (item) => item.src,
    },
    badgeNumber: { type: "text", label: "Badge number" },
    badgeLabel: { type: "text", label: "Badge label" },
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    para1: { type: "textarea", label: "Paragraph 1" },
    para2: { type: "textarea", label: "Paragraph 2" },
    primaryCta: { type: "text", label: "Primary link label" },
    secondaryCta: { type: "text", label: "Secondary link label" },
  },
  defaultProps: { hidden: "show", ...HOME_ABOUT_TEASER },
  render: hideable(AboutTeaser),
}

const whyUs: ComponentConfig<HomeBlockProps["WhyUs"]> = {
  label: "Why choose us",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    intro: { type: "textarea", label: "Intro" },
    cards: {
      type: "array",
      label: "Cards",
      arrayFields: {
        ic: iconSelect("Icon", WHY_ICONS),
        n: { type: "text", label: "Number" },
        t: { type: "text", label: "Title" },
        p: { type: "textarea", label: "Body" },
        stat: { type: "text", label: "Stat line" },
        accent: {
          type: "select",
          label: "Accent",
          options: [
            { label: "Cyan", value: "var(--shine-cyan)" },
            { label: "Green", value: "var(--success)" },
            { label: "Amber", value: "var(--warning)" },
          ],
        },
      },
      defaultItemProps: {
        ic: "buff-swirl",
        n: "04",
        t: "New card",
        p: "",
        stat: "",
        accent: "var(--shine-cyan)",
      },
      getItemSummary: (item) => item.t,
    },
  },
  defaultProps: { hidden: "show", ...HOME_WHY },
  render: hideable(WhyUs),
}

const reviews: ComponentConfig<HomeBlockProps["Reviews"]> = {
  label: "Reviews",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    intro: { type: "textarea", label: "Intro" },
    ratingValue: { type: "text", label: "Rating (e.g. 4.6)" },
    ratingNote: { type: "text", label: "Rating note" },
    reviews: {
      type: "array",
      label: "Reviews",
      arrayFields: {
        q: { type: "textarea", label: "Quote" },
        nm: { type: "text", label: "Name" },
        when: { type: "text", label: "When" },
        av: { type: "text", label: "Avatar initials" },
        c: { type: "text", label: "Avatar color (hex)" },
      },
      defaultItemProps: { q: "", nm: "", when: "", av: "", c: "#1a73e8" },
      getItemSummary: (item) => item.nm || "Review",
    },
  },
  defaultProps: { hidden: "show", ...HOME_REVIEWS },
  render: hideable(Reviews),
}

const homeContact: ComponentConfig<HomeBlockProps["HomeContact"]> = {
  label: "Contact strip",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    intro: { type: "textarea", label: "Intro" },
    infoTitle: { type: "text", label: "Info card title" },
    formTitle: { type: "text", label: "Form card title" },
    details: {
      type: "object",
      label: "Contact details",
      objectFields: {
        phone: { type: "text", label: "Phone" },
        address: { type: "text", label: "Address" },
        email: { type: "text", label: "Email" },
      },
    },
  },
  defaultProps: { hidden: "show", ...HOME_CONTACT },
  render: hideable(HomeContact),
}

export const homeBlocks = {
  HomeHero: homeHero,
  TrustBar: trustBar,
  Services: services,
  AboutTeaser: aboutTeaser,
  WhyUs: whyUs,
  Reviews: reviews,
  HomeContact: homeContact,
}
