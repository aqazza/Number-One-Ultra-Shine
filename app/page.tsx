import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/site/hero"
import { Services } from "@/components/site/services"
import { Reviews } from "@/components/site/reviews"
import { TrustBar, AboutTeaser, WhyUs } from "@/components/site/home-sections"
import { HomeContact } from "@/components/site/contact"

export const metadata: Metadata = {
  title: "Number One Ultra Shine · Premium Auto Detailing in Glendora, CA",
  description:
    "Family-run auto detailing in Glendora, CA since 1995. Interior, exterior, full details and ceramic coating, hand-finished with care. Book your detail today.",
}

export default function HomePage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Services" />
        <Hero />
        <TrustBar />
        <Services />
        <AboutTeaser />
        <WhyUs />
        <Reviews />
        <HomeContact />
        <Footer />
      </div>
    </>
  )
}
