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
import { GALLERY_GRID } from "./gallery-content"
import { CONTACT_HERO, CONTACT_MAIN } from "./contact-content"
import { INTERIOR, EXTERIOR, FULL_DETAILS, CERAMIC, type ServicePageContent } from "./service-content"

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

export const GALLERY_SEED: PageData = {
  root: { props: {} },
  content: [
    { type: "GalleryGrid", props: { id: "GalleryGrid-seed", hidden: "show", ...GALLERY_GRID } },
  ],
}

export const CONTACT_SEED: PageData = {
  root: { props: {} },
  content: [
    { type: "ContactHero", props: { id: "ContactHero-seed", hidden: "show", ...CONTACT_HERO } },
    { type: "ContactMain", props: { id: "ContactMain-seed", hidden: "show", ...CONTACT_MAIN } },
  ],
}

function serviceSeed(slug: string, c: ServicePageContent): PageData {
  return {
    root: { props: {} },
    content: [
      { type: "ServiceHero", props: { id: `ServiceHero-${slug}`, hidden: "show", ...c.hero } },
      { type: "ServiceIncluded", props: { id: `ServiceIncluded-${slug}`, hidden: "show", ...c.included } },
      { type: "ServiceProcess", props: { id: `ServiceProcess-${slug}`, hidden: "show", ...c.process } },
      { type: "ServiceWork", props: { id: `ServiceWork-${slug}`, hidden: "show", ...c.work } },
      { type: "ServiceCta", props: { id: `ServiceCta-${slug}`, hidden: "show", ...c.cta } },
    ],
  }
}

export const SEEDS: Record<string, PageData> = {
  "/": HOME_SEED,
  "/about": ABOUT_SEED,
  "/gallery": GALLERY_SEED,
  "/contact": CONTACT_SEED,
  "/services/interior-detailing": serviceSeed("interior", INTERIOR),
  "/services/exterior": serviceSeed("exterior", EXTERIOR),
  "/services/full-details": serviceSeed("full", FULL_DETAILS),
  "/services/ceramic-coating": serviceSeed("ceramic", CERAMIC),
}

// Human titles for the admin dashboard.
export const PAGE_TITLES: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/gallery": "Gallery",
  "/contact": "Contact",
  "/services/interior-detailing": "Interior Detailing",
  "/services/exterior": "Exterior Detailing",
  "/services/full-details": "Full Details",
  "/services/ceramic-coating": "Ceramic Coating",
}
