import type { Metadata } from "next"
import { Render } from "@measured/puck/rsc"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import config from "@/puck.config"
import { getPage } from "@/lib/puck/db"
import { SEEDS } from "@/lib/puck/seeds"

export const metadata: Metadata = {
  title: "Full Details in Glendora, CA | Number One Ultra Shine",
  description:
    "The complete package in Glendora, CA: full interior and full exterior detailing combined in one visit. The most complete transformation from Number One Ultra Shine.",
}

// Content between Header and Footer is client-editable via Puck (/admin).
export default async function FullDetailsPage() {
  const data = (await getPage("/services/full-details")) ?? SEEDS["/services/full-details"]
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Services" />
        <main>
          <Render config={config} data={data} />
        </main>
        <Footer />
      </div>
    </>
  )
}
