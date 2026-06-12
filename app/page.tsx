import type { Metadata } from "next"
import { Render } from "@measured/puck/rsc"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import config from "@/puck.config"
import { getPage } from "@/lib/puck/db"
import { SEEDS } from "@/lib/puck/seeds"

export const metadata: Metadata = {
  title: "Number One Ultra Shine · Premium Auto Detailing in Glendora, CA",
  description:
    "Family-run auto detailing in Glendora, CA since 1995. Interior, exterior, full details and ceramic coating, hand-finished with care. Book your detail today.",
}

// Sections between Header and Footer are client-editable via Puck (/admin).
// Saved JSON comes from Neon; the in-repo seed is the fallback.
export default async function HomePage() {
  const data = (await getPage("/")) ?? SEEDS["/"]
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
