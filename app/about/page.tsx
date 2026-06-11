import type { Metadata } from "next"
import { Render } from "@measured/puck/rsc"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import config from "@/puck.config"
import { getPage } from "@/lib/puck/db"
import { ABOUT_SEED } from "@/lib/puck/about-seed"

export const metadata: Metadata = {
  title: "About · Family-Run Since 1995 | Number One Ultra Shine",
  description:
    "Number One Ultra Shine is a family-run auto-detailing shop in Glendora, CA, hand-finishing vehicles since 1995. Meet the team and our standards.",
}

// Sections between Header and Footer are client-editable via Puck
// (/admin/edit/about). Saved JSON comes from Neon; the in-repo seed is the
// fallback so the page renders identically before storage is provisioned.
// Saves call revalidatePath("/about"), so the static page refreshes on publish.
export default async function AboutPage() {
  const data = (await getPage("/about")) ?? ABOUT_SEED
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="About" />
        <Render config={config} data={data} />
        <Footer />
      </div>
    </>
  )
}
