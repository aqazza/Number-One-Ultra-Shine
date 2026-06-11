import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { ServiceDetail, type ServiceDetailData } from "@/components/site/service-detail"

export const metadata: Metadata = {
  title: "Interior Detailing in Glendora, CA | Number One Ultra Shine",
  description:
    "Full interior detailing in Glendora, CA: vacuum, shampoo, hot-water extraction and hand-finished surfaces. A complete cabin reset from Number One Ultra Shine.",
}

const INTERIOR: ServiceDetailData = {
  eyebrow: "Interior Service",
  title: "Interior Detailing",
  blurb:
    "A complete cabin reset. We vacuum, shampoo, extract and hand-wipe every surface until your interior looks, feels and smells brand new.",
  heroImg: "/photos/interior-cleanup.webp",
  icon: "sparkles",
  scanTag: "Cabin scan",
  stats: [
    { n: "4", l: "Services" },
    { n: "1995", l: "Established" },
    { n: "By hand", l: "Finish" },
    { n: "Soon", l: "Pricing" },
  ],
  includes: [
    {
      nm: "Interior Express",
      ds: "The quick cabin refresh.",
      icon: "sparkles",
      points: ["Full vacuum throughout", "Wipe-down of all surfaces", "Streak-free interior glass"],
    },
    {
      nm: "Seats Shampoo",
      ds: "Deep-cleaned, like-new seats.",
      icon: "droplets",
      points: ["Deep fabric shampoo", "Hot-water extraction", "Spot & stain treatment"],
    },
    {
      nm: "Carpet Shampoo",
      ds: "Floors brought back to life.",
      icon: "brush",
      points: ["Carpets & floor mats", "Footwells & edges", "Odor refresh"],
    },
    {
      nm: "Full Interior Detail",
      ds: "All three services combined, our complete cabin reset.",
      icon: "gem",
      featured: true,
      points: ["Everything in Interior Express", "Seats Shampoo included", "Carpet Shampoo included"],
    },
  ],
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
  ctaTitle: "Ready to refresh your interior?",
  ctaText: "Book your interior detail today, or give us a call and we'll walk you through the options.",
}

export default function InteriorDetailingPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Services" />
        <ServiceDetail data={INTERIOR} />
        <Footer />
      </div>
    </>
  )
}
