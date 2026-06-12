import type { ComponentConfig } from "@measured/puck"
import {
  AboutHero,
  StatsBand,
  Standards,
  Timeline,
  FamilyNote,
  type AboutHeroProps,
  type StatsBandProps,
  type StandardsProps,
  type TimelineProps,
  type FamilyNoteProps,
} from "@/components/about/sections"
import {
  ABOUT_HERO,
  STATS_BAND,
  STANDARDS,
  TIMELINE,
  FAMILY_NOTE,
} from "@/lib/puck/about-content"
import { HIDDEN_FIELD, hideable, img, type Hideable } from "./shared"

export type AboutBlockProps = {
  AboutHero: Hideable & AboutHeroProps
  StatsBand: Hideable & StatsBandProps
  Standards: Hideable & StandardsProps
  Timeline: Hideable & TimelineProps
  FamilyNote: Hideable & FamilyNoteProps
}

export const ABOUT_IMAGE_FIELDS: Record<string, string[]> = {
  AboutHero: ["mainImg", "subImg"],
  Standards: ["cards.img"],
  Timeline: ["items.img"],
  FamilyNote: ["photo"],
}

const aboutHero: ComponentConfig<AboutBlockProps["AboutHero"]> = {
  label: "Hero",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    headingAccent: { type: "text", label: "Heading accent (cyan)" },
    para1: { type: "textarea", label: "Paragraph 1" },
    para2: { type: "textarea", label: "Paragraph 2" },
    signName: { type: "text", label: "Signature name" },
    signRole: { type: "text", label: "Signature role" },
    mainImg: img("Main image"),
    mainImgAlt: { type: "text", label: "Main image alt text" },
    subImg: img("Small image"),
    subImgAlt: { type: "text", label: "Small image alt text" },
    badgeNumber: { type: "text", label: "Badge number" },
    badgeLabel: { type: "text", label: "Badge label" },
    ghostYear: { type: "text", label: "Background ghost text" },
  },
  defaultProps: { hidden: "show", ...ABOUT_HERO },
  render: hideable(AboutHero),
}

const statsBand: ComponentConfig<AboutBlockProps["StatsBand"]> = {
  label: "Stats band",
  fields: {
    hidden: HIDDEN_FIELD,
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
  defaultProps: { hidden: "show", ...STATS_BAND },
  render: hideable(StatsBand),
}

const standards: ComponentConfig<AboutBlockProps["Standards"]> = {
  label: "Our standards",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    intro: { type: "textarea", label: "Intro" },
    cards: {
      type: "array",
      label: "Cards",
      arrayFields: {
        t: { type: "text", label: "Title" },
        p: { type: "textarea", label: "Body" },
        stat: { type: "text", label: "Stat line" },
        img: img("Background image"),
      },
      defaultItemProps: {
        t: "New standard",
        p: "Describe it here.",
        stat: "",
        img: "/photos/closeup-care-1.webp",
      },
      getItemSummary: (item) => item.t,
    },
  },
  defaultProps: { hidden: "show", ...STANDARDS },
  render: hideable(Standards),
}

const timeline: ComponentConfig<AboutBlockProps["Timeline"]> = {
  label: "Story timeline",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    items: {
      type: "array",
      label: "Eras",
      arrayFields: {
        yr: { type: "text", label: "Year badge" },
        t: { type: "text", label: "Title" },
        p: { type: "textarea", label: "Body" },
        hl: { type: "text", label: "Milestone line" },
        img: img("Photo"),
      },
      defaultItemProps: {
        yr: "Year",
        t: "New era",
        p: "What happened.",
        hl: "",
        img: "/photos/detailing-station.webp",
      },
      getItemSummary: (item) => `${item.yr} — ${item.t}`,
    },
  },
  defaultProps: { hidden: "show", ...TIMELINE },
  render: hideable(Timeline),
}

const familyNote: ComponentConfig<AboutBlockProps["FamilyNote"]> = {
  label: "Note from the family",
  fields: {
    hidden: HIDDEN_FIELD,
    photo: img("Portrait photo"),
    photoAlt: { type: "text", label: "Portrait alt text" },
    quote: { type: "textarea", label: "Quote" },
    quoteAccent: { type: "text", label: "Quote accent (cyan)" },
    copy: { type: "textarea", label: "Body copy" },
    signName: { type: "text", label: "Signature" },
  },
  defaultProps: { hidden: "show", ...FAMILY_NOTE },
  render: hideable(FamilyNote),
}

export const aboutBlocks = {
  AboutHero: aboutHero,
  StatsBand: statsBand,
  Standards: standards,
  Timeline: timeline,
  FamilyNote: familyNote,
}
