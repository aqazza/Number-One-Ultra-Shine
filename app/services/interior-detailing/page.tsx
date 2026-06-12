import type { Metadata } from "next"
import { Render } from "@measured/puck/rsc"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import config from "@/puck.config"
import { getPage } from "@/lib/puck/db"
import { SEEDS } from "@/lib/puck/seeds"

export const metadata: Metadata = {
  title: "Interior Detailing in Glendora, CA | Number One Ultra Shine",
  description:
    "Full interior detailing in Glendora, CA: vacuum, shampoo, hot-water extraction and hand-finished surfaces. A complete cabin reset from Number One Ultra Shine.",
}

// Content between Header and Footer is client-editable via Puck (/admin).
export default async function InteriorDetailingPage() {
  const data = (await getPage("/services/interior-detailing")) ?? SEEDS["/services/interior-detailing"]
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
