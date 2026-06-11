import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { ServiceDetail, type ServiceDetailData } from "@/components/site/service-detail"

export const metadata: Metadata = {
  title: "Exterior Detailing in Glendora, CA | Number One Ultra Shine",
  description:
    "Exterior detailing in Glendora, CA: foam wash, clay bar, polish, wax and paint correction for a deep, mirror-like finish from Number One Ultra Shine.",
}

const EXTERIOR: ServiceDetailData = {
  eyebrow: "Exterior Service",
  title: "Exterior Detailing",
  blurb:
    "Decontaminate, correct and protect your paint for a deep, mirror-like finish that lasts long after you drive off.",
  heroImg: "/photos/exterior-wash.webp",
  icon: "car",
  scanTag: "Body scan",
  stats: [
    { n: "4", l: "Services" },
    { n: "1995", l: "Established" },
    { n: "By hand", l: "Finish" },
    { n: "Soon", l: "Pricing" },
  ],
  includes: [
    {
      nm: "Clay & Spray Wax",
      ds: "Decontaminate & quick-protect the paint.",
      icon: "spray-can",
      points: ["Foam wash & hand dry", "Clay bar decontamination", "Spray wax protection"],
    },
    {
      nm: "Clay & Hand Wax",
      ds: "A deeper, hand-applied gloss.",
      icon: "hand-heart",
      points: ["Everything in Clay & Spray Wax", "Hand-applied premium wax", "Warmer, deeper shine"],
    },
    {
      nm: "Full Exterior Detail",
      ds: "Wash, clay, polish & protect, the complete treatment.",
      icon: "gem",
      featured: true,
      points: ["Full wash & decontamination", "Machine polish for gloss", "Wax, trim & tire dressing"],
    },
    {
      nm: "Paint Correction (Polishing)",
      ds: "Multi-stage cut to erase swirls & oxidation.",
      icon: "sparkles",
      featured: true,
      points: ["Multi-stage machine polish", "Removes swirls & scratches", "A true mirror finish"],
    },
  ],
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
  ctaTitle: "Ready for a mirror finish?",
  ctaText: "Book your exterior detail today, or call and we'll recommend the right level for your paint.",
}

export default function ExteriorPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Services" />
        <ServiceDetail data={EXTERIOR} />
        <Footer />
      </div>
    </>
  )
}
