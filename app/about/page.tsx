import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { AboutHero, StatsBand, Standards, Timeline, FamilyNote } from "@/components/about/sections"
import { ABOUT_HERO, STATS_BAND, STANDARDS, TIMELINE, FAMILY_NOTE } from "@/lib/puck/about-content"

export const metadata: Metadata = {
  title: "About · Family-Run Since 1995 | Number One Ultra Shine",
  description:
    "Number One Ultra Shine is a family-run auto-detailing shop in Glendora, CA, hand-finishing vehicles since 1995. Meet the team and our standards.",
}

export default function AboutPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="About" />
        <AboutHero {...ABOUT_HERO} />
        <StatsBand {...STATS_BAND} />
        <Standards {...STANDARDS} />
        <Timeline {...TIMELINE} />
        <FamilyNote {...FAMILY_NOTE} />
        <Footer />
      </div>
    </>
  )
}
