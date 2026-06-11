import type { Config, Data } from "@measured/puck"
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

// Puck blocks wrap the EXISTING About sections. Only content is editable
// (headings, body copy, image URLs, lists, show/hide). Colors, spacing and
// typography are locked in CSS and deliberately not exposed as fields.

type Hideable = { hidden: "show" | "hide" }

export type Blocks = {
  AboutHero: Hideable & AboutHeroProps
  StatsBand: Hideable & StatsBandProps
  Standards: Hideable & StandardsProps
  Timeline: Hideable & TimelineProps
  FamilyNote: Hideable & FamilyNoteProps
}

// The Puck document shape for pages built from these blocks.
export type PageData = Data<Blocks>

const HIDDEN_FIELD = {
  type: "radio" as const,
  label: "Visibility",
  options: [
    { label: "Show", value: "show" },
    { label: "Hide", value: "hide" },
  ],
}

const img = (label: string) => ({ type: "text" as const, label: `${label} (path or URL)` })

export const config: Config<Blocks> = {
  categories: {
    about: {
      title: "About sections",
      components: ["AboutHero", "StatsBand", "Standards", "Timeline", "FamilyNote"],
    },
  },
  components: {
    AboutHero: {
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
      render: ({ hidden, ...p }: Hideable & AboutHeroProps) =>
        hidden === "hide" ? <></> : <AboutHero {...p} />,
    },
    StatsBand: {
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
          getItemSummary: (item: { n: string; l: string }) => `${item.n} — ${item.l}`,
        },
      },
      defaultProps: { hidden: "show", ...STATS_BAND },
      render: ({ hidden, ...p }: Hideable & StatsBandProps) =>
        hidden === "hide" ? <></> : <StatsBand {...p} />,
    },
    Standards: {
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
          getItemSummary: (item: { t: string }) => item.t,
        },
      },
      defaultProps: { hidden: "show", ...STANDARDS },
      render: ({ hidden, ...p }: Hideable & StandardsProps) =>
        hidden === "hide" ? <></> : <Standards {...p} />,
    },
    Timeline: {
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
          getItemSummary: (item: { yr: string; t: string }) => `${item.yr} — ${item.t}`,
        },
      },
      defaultProps: { hidden: "show", ...TIMELINE },
      render: ({ hidden, ...p }: Hideable & TimelineProps) =>
        hidden === "hide" ? <></> : <Timeline {...p} />,
    },
    FamilyNote: {
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
      render: ({ hidden, ...p }: Hideable & FamilyNoteProps) =>
        hidden === "hide" ? <></> : <FamilyNote {...p} />,
    },
  },
}

export default config
