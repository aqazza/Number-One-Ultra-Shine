import type { PageData } from "@/puck.config"
import { ABOUT_SEED } from "./about-seed"
import {
  HOME_HERO,
  HOME_TRUST,
  HOME_SERVICES,
  HOME_ABOUT_TEASER,
  HOME_WHY,
  HOME_REVIEWS,
  HOME_CONTACT,
} from "./home-content"

// Seed documents: every editable page's CURRENT live content, in order.
// Used to auto-seed the database on first read and as the render fallback,
// so each page is pixel-identical before and after Puck conversion.

export const HOME_SEED: PageData = {
  root: { props: {} },
  content: [
    { type: "HomeHero", props: { id: "HomeHero-seed", hidden: "show", ...HOME_HERO } },
    { type: "TrustBar", props: { id: "TrustBar-seed", hidden: "show", ...HOME_TRUST } },
    { type: "Services", props: { id: "Services-seed", hidden: "show", ...HOME_SERVICES } },
    { type: "AboutTeaser", props: { id: "AboutTeaser-seed", hidden: "show", ...HOME_ABOUT_TEASER } },
    { type: "WhyUs", props: { id: "WhyUs-seed", hidden: "show", ...HOME_WHY } },
    { type: "Reviews", props: { id: "Reviews-seed", hidden: "show", ...HOME_REVIEWS } },
    { type: "HomeContact", props: { id: "HomeContact-seed", hidden: "show", ...HOME_CONTACT } },
  ],
}

export const SEEDS: Record<string, PageData> = {
  "/": HOME_SEED,
  "/about": ABOUT_SEED,
}

// Human titles for the admin dashboard.
export const PAGE_TITLES: Record<string, string> = {
  "/": "Home",
  "/about": "About",
}
