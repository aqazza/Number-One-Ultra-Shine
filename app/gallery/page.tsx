import type { Metadata } from "next"
import { Render } from "@measured/puck/rsc"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import config from "@/puck.config"
import { getPage } from "@/lib/puck/db"
import { SEEDS } from "@/lib/puck/seeds"

export const metadata: Metadata = {
  title: "Gallery · Before & After Detailing | Number One Ultra Shine",
  description:
    "Drag the slider to see the difference. Real before-and-after detailing work from Number One Ultra Shine in Glendora, CA.",
}

// Content between Header and Footer is client-editable via Puck (/admin).
export default async function GalleryPage() {
  const data = (await getPage("/gallery")) ?? SEEDS["/gallery"]
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Gallery" />
        <main>
          <Render config={config} data={data} />
        </main>
        <Footer />
      </div>
    </>
  )
}
