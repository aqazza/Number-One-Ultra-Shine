import type { Metadata } from "next"
import { Render } from "@measured/puck/rsc"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import config from "@/puck.config"
import { getPage } from "@/lib/puck/db"
import { SEEDS } from "@/lib/puck/seeds"

export const metadata: Metadata = {
  title: "Contact · Book Your Detail | Number One Ultra Shine",
  description:
    "Call (626) 629-4916 or visit us at 525 E Route 66, Glendora, CA 91740. Book your interior, exterior, full detail or ceramic coating with Number One Ultra Shine.",
}

// Content between Header and Footer is client-editable via Puck (/admin).
export default async function ContactPage() {
  const data = (await getPage("/contact")) ?? SEEDS["/contact"]
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Contact" />
        <main>
          <Render config={config} data={data} />
        </main>
        <Footer />
      </div>
    </>
  )
}
