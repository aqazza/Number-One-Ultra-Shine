import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { ServiceDetail, type ServiceDetailData } from "@/components/site/service-detail"

export const metadata: Metadata = {
  title: "Full Details in Glendora, CA | Number One Ultra Shine",
  description:
    "The complete package in Glendora, CA: full interior and full exterior detailing combined in one visit. The most complete transformation from Number One Ultra Shine.",
}

const FULL_DETAILS: ServiceDetailData = {
  eyebrow: "Signature Package",
  title: "Full Details",
  blurb:
    "Everything we do, in one visit. Interior and exterior combined for the most complete transformation we offer.",
  heroImg: "/photos/detailing-station.webp",
  icon: "droplets",
  scanTag: "Full vehicle scan",
  stats: [
    { n: "1", l: "Visit" },
    { n: "2", l: "Full details" },
    { n: "1995", l: "Established" },
    { n: "Soon", l: "Pricing" },
  ],
  includes: [
    {
      nm: "Full Interior Detail & Full Exterior Detail",
      ds: "Everything inside and out, fully detailed in one visit.",
      icon: "gem",
      points: [
        "Complete cabin reset, top to bottom",
        "Wash, clay, polish & protect outside",
        "One visit, one flawless car",
      ],
    },
  ],
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
  ctaTitle: "Ready for the full transformation?",
  ctaText: "Book a Full Detail today, or call us and we'll find a time that fits your schedule.",
}

export default function FullDetailsPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Services" />
        <ServiceDetail data={FULL_DETAILS} />
        <Footer />
      </div>
    </>
  )
}
