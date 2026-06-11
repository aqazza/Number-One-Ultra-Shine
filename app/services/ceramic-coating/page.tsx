import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { ServiceDetail, type ServiceDetailData } from "@/components/site/service-detail"

export const metadata: Metadata = {
  title: "Ceramic Coating in Glendora, CA | Number One Ultra Shine",
  description:
    "Professional ceramic coating in Glendora, CA: 1-year, 3-year and 4-year protection packages with lasting gloss, water beading and easier washes.",
}

const CERAMIC: ServiceDetailData = {
  eyebrow: "Long-Term Protection",
  title: "Ceramic Coating",
  blurb:
    "A durable ceramic layer that bonds to your paint, with years of gloss, water-beading and easier washes. A coating, not a wax.",
  heroImg: "/photos/services/ceramic-beading.webp",
  icon: "shield-check",
  scanTag: "Coating scan",
  stats: [
    { n: "3", l: "Protection levels" },
    { n: "4 yr", l: "Max protection" },
    { n: "1995", l: "Established" },
    { n: "Soon", l: "Pricing" },
  ],
  includes: [
    {
      nm: "1-Year Protection",
      ds: "Entry ceramic coating with strong gloss.",
      icon: "shield-check",
      points: ["Single ceramic layer", "Strong gloss & beading", "A great intro to coatings"],
    },
    {
      nm: "3-Year Protection",
      ds: "Durable multi-layer coating, our most popular.",
      icon: "gem",
      featured: true,
      points: ["Multi-layer ceramic stack", "Years of gloss & protection", "Noticeably easier washes"],
    },
    {
      nm: "4-Year Protection",
      ds: "Our longest-lasting ceramic protection.",
      icon: "award",
      points: ["Our most durable stack", "Maximum chemical resistance", "Long-term peace of mind"],
    },
  ],
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
  ctaTitle: "Ready for years of protection?",
  ctaText: "Book your ceramic coating today, or call and we'll help you pick the right protection level.",
}

export default function CeramicCoatingPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Services" />
        <ServiceDetail data={CERAMIC} />
        <Footer />
      </div>
    </>
  )
}
