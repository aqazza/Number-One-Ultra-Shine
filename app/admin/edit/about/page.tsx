import type { Metadata } from "next"
import { getPage } from "@/lib/puck/db"
import { ABOUT_SEED } from "@/lib/puck/about-seed"
import { AboutEditor } from "./editor"

export const metadata: Metadata = {
  title: "Edit · About | Number One Ultra Shine",
  robots: { index: false, follow: false },
}

// Always load the latest saved document (or the seed when storage is empty
// or unconfigured) — never a cached copy.
export const dynamic = "force-dynamic"

export default async function EditAboutPage() {
  const data = (await getPage("/about")) ?? ABOUT_SEED
  return <AboutEditor path="/about" initialData={data} />
}
