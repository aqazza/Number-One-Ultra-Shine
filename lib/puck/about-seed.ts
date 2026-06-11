import type { PageData } from "@/puck.config"
import { ABOUT_HERO, STATS_BAND, STANDARDS, TIMELINE, FAMILY_NOTE } from "./about-content"

// Initial Puck document for /about — exactly the current live page, in order.
// Used as the database seed AND as the render fallback when no row (or no
// DATABASE_URL) exists, which keeps the public page identical either way.
export const ABOUT_SEED: PageData = {
  root: { props: {} },
  content: [
    { type: "AboutHero", props: { id: "AboutHero-seed", hidden: "show", ...ABOUT_HERO } },
    { type: "StatsBand", props: { id: "StatsBand-seed", hidden: "show", ...STATS_BAND } },
    { type: "Standards", props: { id: "Standards-seed", hidden: "show", ...STANDARDS } },
    { type: "Timeline", props: { id: "Timeline-seed", hidden: "show", ...TIMELINE } },
    { type: "FamilyNote", props: { id: "FamilyNote-seed", hidden: "show", ...FAMILY_NOTE } },
  ],
}
