import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { ContactHero, ContactMain } from "@/components/site/contact"

export const metadata: Metadata = {
  title: "Contact · Book Your Detail | Number One Ultra Shine",
  description:
    "Call (626) 629-4916 or visit us at 525 E Route 66, Glendora, CA 91740. Book your interior, exterior, full detail or ceramic coating with Number One Ultra Shine.",
}

export default function ContactPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Contact" />
        <ContactHero />
        <ContactMain />
        <Footer />
      </div>
    </>
  )
}
