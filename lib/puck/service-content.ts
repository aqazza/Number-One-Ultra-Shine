import type {
  ServiceHeroProps,
  ServiceIncludedProps,
  ServiceProcessProps,
  ServiceWorkProps,
  ServiceCtaProps,
} from "@/components/site/service-detail"

// The CURRENT /services/* page content, verbatim — Puck defaults + DB seeds.

export type ServicePageContent = {
  hero: ServiceHeroProps
  included: ServiceIncludedProps
  process: ServiceProcessProps
  work: ServiceWorkProps
  cta: ServiceCtaProps
}

const INCLUDED_HEAD = {
  eyebrow: "What's included",
  heading: "Everything in this service",
  intro: "Choose the level that fits your car. Pricing arrives soon.",
}

const PROCESS_HEAD = {
  eyebrow: "How it works",
  heading: "What to expect",
  intro: "A careful, hand-finished process from the moment you hand us the keys.",
}

const WORK_HEAD = { eyebrow: "The work", heading: "A closer look" }

export const INTERIOR: ServicePageContent = {
  hero: {
    eyebrow: "Interior Service",
    title: "Interior Detailing",
    blurb:
      "A complete cabin reset. We vacuum, shampoo, extract and hand-wipe every surface until your interior looks, feels and smells brand new.",
    heroImg: "/photos/interior-cleanup.webp",
    icon: "sparkles",
    stats: [
      { n: "4", l: "Services" },
      { n: "1995", l: "Established" },
      { n: "By hand", l: "Finish" },
      { n: "Soon", l: "Pricing" },
    ],
  },
  included: {
    ...INCLUDED_HEAD,
    includes: [
      {
        nm: "Interior Express",
        ds: "The quick cabin refresh.",
        icon: "sparkles",
        points: [
          { text: "Full vacuum throughout" },
          { text: "Wipe-down of all surfaces" },
          { text: "Streak-free interior glass" },
        ],
      },
      {
        nm: "Seats Shampoo",
        ds: "Deep-cleaned, like-new seats.",
        icon: "droplets",
        points: [
          { text: "Deep fabric shampoo" },
          { text: "Hot-water extraction" },
          { text: "Spot & stain treatment" },
        ],
      },
      {
        nm: "Carpet Shampoo",
        ds: "Floors brought back to life.",
        icon: "brush",
        points: [
          { text: "Carpets & floor mats" },
          { text: "Footwells & edges" },
          { text: "Odor refresh" },
        ],
      },
      {
        nm: "Full Interior Detail",
        ds: "All three services combined, our complete cabin reset.",
        icon: "gem",
        featured: true,
        points: [
          { text: "Everything in Interior Express" },
          { text: "Seats Shampoo included" },
          { text: "Carpet Shampoo included" },
        ],
      },
    ],
  },
  process: {
    ...PROCESS_HEAD,
    scanTag: "Cabin scan",
    steps: [
      {
        t: "Deep vacuum",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seats, carpets, mats, trunk and every crevice, cleared down to the fibers.",
        zone: "floor",
      },
      {
        t: "Shampoo & extract",
        p: "Lorem ipsum dolor sit amet. Hot-water extraction lifts embedded dirt, stains and odors out of the fabric and carpet.",
        zone: "seats",
      },
      {
        t: "Surfaces & glass",
        p: "Lorem ipsum dolor sit amet. Dashboards, panels and trim are hand-wiped and conditioned, with streak-free interior glass.",
        zone: "dash",
      },
      {
        t: "Final inspection",
        p: "Lorem ipsum dolor sit amet. We walk every surface a second time so the cabin leaves spotless, every time.",
        zone: "all",
      },
    ],
  },
  work: {
    ...WORK_HEAD,
    gallery: [
      {
        src: "/photos/interior-cleanup.webp",
        tag: "Vacuum",
        caption: "Every crevice, cleared down to the fibers",
      },
      {
        src: "/photos/services/seat-extraction.webp",
        tag: "Extraction",
        caption: "Hot-water extraction lifts stains & odors",
      },
      {
        src: "/photos/services/dash-wipe.webp",
        tag: "Trim & surfaces",
        caption: "Hand-wiped and conditioned, panel by panel",
      },
      {
        src: "/photos/services/finished-interior.webp",
        tag: "The finish",
        caption: "A cabin that feels factory-new again",
      },
    ],
  },
  cta: {
    eyebrow: "Book today",
    ctaTitle: "Ready to refresh your interior?",
    ctaText:
      "Book your interior detail today, or give us a call and we'll walk you through the options.",
  },
}

export const EXTERIOR: ServicePageContent = {
  hero: {
    eyebrow: "Exterior Service",
    title: "Exterior Detailing",
    blurb:
      "Decontaminate, correct and protect your paint for a deep, mirror-like finish that lasts long after you drive off.",
    heroImg: "/photos/exterior-wash.webp",
    icon: "car",
    stats: [
      { n: "4", l: "Services" },
      { n: "1995", l: "Established" },
      { n: "By hand", l: "Finish" },
      { n: "Soon", l: "Pricing" },
    ],
  },
  included: {
    ...INCLUDED_HEAD,
    includes: [
      {
        nm: "Clay & Spray Wax",
        ds: "Decontaminate & quick-protect the paint.",
        icon: "spray-can",
        points: [
          { text: "Foam wash & hand dry" },
          { text: "Clay bar decontamination" },
          { text: "Spray wax protection" },
        ],
      },
      {
        nm: "Clay & Hand Wax",
        ds: "A deeper, hand-applied gloss.",
        icon: "hand-heart",
        points: [
          { text: "Everything in Clay & Spray Wax" },
          { text: "Hand-applied premium wax" },
          { text: "Warmer, deeper shine" },
        ],
      },
      {
        nm: "Full Exterior Detail",
        ds: "Wash, clay, polish & protect, the complete treatment.",
        icon: "gem",
        featured: true,
        points: [
          { text: "Full wash & decontamination" },
          { text: "Machine polish for gloss" },
          { text: "Wax, trim & tire dressing" },
        ],
      },
      {
        nm: "Paint Correction (Polishing)",
        ds: "Multi-stage cut to erase swirls & oxidation.",
        icon: "sparkles",
        featured: true,
        points: [
          { text: "Multi-stage machine polish" },
          { text: "Removes swirls & scratches" },
          { text: "A true mirror finish" },
        ],
      },
    ],
  },
  process: {
    ...PROCESS_HEAD,
    scanTag: "Body scan",
    steps: [
      {
        t: "Foam wash & hand dry",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A thick foam bath loosens grime before a careful hand wash and soft microfiber dry.",
        zone: "body",
      },
      {
        t: "Wheels, tires & trim",
        p: "Lorem ipsum dolor sit amet. Wheels, arches and trim are degreased, scrubbed and dressed back to a clean, factory-fresh look.",
        zone: "wheels",
      },
      {
        t: "Glass & brightwork",
        p: "Lorem ipsum dolor sit amet. Exterior glass and chrome are polished streak-free so every surface reads crisp from any angle.",
        zone: "glass",
      },
      {
        t: "Polish, wax & inspection",
        p: "Lorem ipsum dolor sit amet. The paint is clayed, polished and sealed in protective wax, then inspected panel by panel under light.",
        zone: "all",
      },
    ],
  },
  work: {
    ...WORK_HEAD,
    gallery: [
      {
        src: "/photos/exterior-wash.webp",
        tag: "Foam bath",
        caption: "Thick foam lifts grime off the paint",
      },
      {
        src: "/photos/gallery/wheel-after.webp",
        tag: "Wheels",
        caption: "Degreased, scrubbed & dressed",
      },
      {
        src: "/photos/gallery/paint-after.webp",
        tag: "Paint",
        caption: "Swirl-free, mirror-deep gloss",
      },
      {
        src: "/photos/services/wax-application.webp",
        tag: "Protection",
        caption: "Sealed in wax, ready for the road",
      },
    ],
  },
  cta: {
    eyebrow: "Book today",
    ctaTitle: "Ready for a mirror finish?",
    ctaText:
      "Book your exterior detail today, or call and we'll recommend the right level for your paint.",
  },
}

export const FULL_DETAILS: ServicePageContent = {
  hero: {
    eyebrow: "Signature Package",
    title: "Full Details",
    blurb:
      "Everything we do, in one visit. Interior and exterior combined for the most complete transformation we offer.",
    heroImg: "/photos/detailing-station.webp",
    icon: "droplets",
    stats: [
      { n: "1", l: "Visit" },
      { n: "2", l: "Full details" },
      { n: "1995", l: "Established" },
      { n: "Soon", l: "Pricing" },
    ],
  },
  included: {
    ...INCLUDED_HEAD,
    includes: [
      {
        nm: "Full Interior Detail & Full Exterior Detail",
        ds: "Everything inside and out, fully detailed in one visit.",
        icon: "gem",
        points: [
          { text: "Complete cabin reset, top to bottom" },
          { text: "Wash, clay, polish & protect outside" },
          { text: "One visit, one flawless car" },
        ],
      },
    ],
  },
  process: {
    ...PROCESS_HEAD,
    scanTag: "Full vehicle scan",
    steps: [
      {
        t: "Complete interior reset",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vacuum, shampoo, extraction and hand-finished surfaces, the full cabin treatment.",
        zone: "cabin",
      },
      {
        t: "Full exterior detail",
        p: "Lorem ipsum dolor sit amet. Foam wash, clay bar, machine polish and wax bring the paint to a deep, protected gloss.",
        zone: "body",
      },
      {
        t: "Wheels, glass & trim",
        p: "Lorem ipsum dolor sit amet. The details that finish the job: dressed tires, streak-free glass and clean, conditioned trim.",
        zone: "wheels",
      },
      {
        t: "Final walkaround",
        p: "Lorem ipsum dolor sit amet. One last inspection inside and out, panel by panel, before the keys come back to you.",
        zone: "all",
      },
    ],
  },
  work: {
    ...WORK_HEAD,
    gallery: [
      {
        src: "/photos/interior-cleanup.webp",
        tag: "Inside",
        caption: "The complete cabin reset",
      },
      {
        src: "/photos/exterior-wash.webp",
        tag: "Outside",
        caption: "Foam wash to flawless finish",
      },
      {
        src: "/photos/gallery/seat-after.webp",
        tag: "Seats",
        caption: "Shampooed & extracted like new",
      },
      {
        src: "/photos/detailing-station.webp",
        tag: "The finish",
        caption: "Hand-finished, panel by panel",
      },
    ],
  },
  cta: {
    eyebrow: "Book today",
    ctaTitle: "Ready for the full transformation?",
    ctaText: "Book a Full Detail today, or call us and we'll find a time that fits your schedule.",
  },
}

export const CERAMIC: ServicePageContent = {
  hero: {
    eyebrow: "Long-Term Protection",
    title: "Ceramic Coating",
    blurb:
      "A durable ceramic layer that bonds to your paint, with years of gloss, water-beading and easier washes. A coating, not a wax.",
    heroImg: "/photos/services/ceramic-beading.webp",
    icon: "shield-check",
    stats: [
      { n: "3", l: "Protection levels" },
      { n: "4 yr", l: "Max protection" },
      { n: "1995", l: "Established" },
      { n: "Soon", l: "Pricing" },
    ],
  },
  included: {
    ...INCLUDED_HEAD,
    includes: [
      {
        nm: "1-Year Protection",
        ds: "Entry ceramic coating with strong gloss.",
        icon: "shield-check",
        points: [
          { text: "Single ceramic layer" },
          { text: "Strong gloss & beading" },
          { text: "A great intro to coatings" },
        ],
      },
      {
        nm: "3-Year Protection",
        ds: "Durable multi-layer coating, our most popular.",
        icon: "gem",
        featured: true,
        points: [
          { text: "Multi-layer ceramic stack" },
          { text: "Years of gloss & protection" },
          { text: "Noticeably easier washes" },
        ],
      },
      {
        nm: "4-Year Protection",
        ds: "Our longest-lasting ceramic protection.",
        icon: "award",
        points: [
          { text: "Our most durable stack" },
          { text: "Maximum chemical resistance" },
          { text: "Long-term peace of mind" },
        ],
      },
    ],
  },
  process: {
    ...PROCESS_HEAD,
    scanTag: "Coating scan",
    steps: [
      {
        t: "Wash, clay & decontaminate",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The paint is washed, clayed and stripped of old wax so the coating bonds to clean, bare paint.",
        zone: "body",
      },
      {
        t: "Wheels & glass prep",
        p: "Lorem ipsum dolor sit amet. Wheels and glass are deep-cleaned and prepped so optional coverage bonds just as strong.",
        zone: "wheels",
      },
      {
        t: "Coating application",
        p: "Lorem ipsum dolor sit amet. The ceramic layer is applied panel by panel and leveled by hand for a uniform, glassy depth.",
        zone: "body",
      },
      {
        t: "Cure & final inspection",
        p: "Lorem ipsum dolor sit amet. The coating cures, then every panel is inspected under light before handoff and aftercare guidance.",
        zone: "all",
      },
    ],
  },
  work: {
    ...WORK_HEAD,
    gallery: [
      {
        src: "/photos/services/machine-polish.webp",
        tag: "Prep",
        caption: "Clayed & polished to clean, bare paint",
      },
      {
        src: "/photos/services/ceramic-applicator.webp",
        tag: "Application",
        caption: "Leveled by hand, panel by panel",
      },
      {
        src: "/photos/gallery/paint-after.webp",
        tag: "The gloss",
        caption: "Glassy depth that lasts for years",
      },
      {
        src: "/photos/services/gloss-beading.webp",
        tag: "Easier washes",
        caption: "Water beads & rolls right off",
      },
    ],
  },
  cta: {
    eyebrow: "Book today",
    ctaTitle: "Ready for years of protection?",
    ctaText:
      "Book your ceramic coating today, or call and we'll help you pick the right protection level.",
  },
}
