import type { Metadata } from "next"
import { Render } from "@measured/puck/rsc"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import config from "@/puck.config"
import { getPage } from "@/lib/puck/db"
import { SEEDS } from "@/lib/puck/seeds"

export const metadata: Metadata = {
  title: "Exterior Detailing in Glendora, CA | Number One Ultra Shine",
  description:
    "Exterior detailing in Glendora, CA: foam wash, clay bar, polish, wax and paint correction for a deep, mirror-like finish from Number One Ultra Shine.",
}

// Content between Header and Footer is client-editable via Puck (/admin).
export default async function ExteriorPage() {
  const data = (await getPage("/services/exterior")) ?? SEEDS["/services/exterior"]
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Services" />
        <Render config={config} data={data} />
        <Footer />
      </div>
    </>
  )
}
