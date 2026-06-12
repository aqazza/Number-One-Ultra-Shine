import type { Metadata } from "next"
import { Render } from "@measured/puck/rsc"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import config from "@/puck.config"
import { getPage } from "@/lib/puck/db"
import { SEEDS } from "@/lib/puck/seeds"

export const metadata: Metadata = {
  title: "Ceramic Coating in Glendora, CA | Number One Ultra Shine",
  description:
    "Professional ceramic coating in Glendora, CA: 1-year, 3-year and 4-year protection packages with lasting gloss, water beading and easier washes.",
}

// Content between Header and Footer is client-editable via Puck (/admin).
export default async function CeramicCoatingPage() {
  const data = (await getPage("/services/ceramic-coating")) ?? SEEDS["/services/ceramic-coating"]
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
