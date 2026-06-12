import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { EDITABLE_PATHS, getPage } from "@/lib/puck/db"
import { SEEDS, PAGE_TITLES } from "@/lib/puck/seeds"
import { PageEditor } from "./editor"

export const metadata: Metadata = {
  title: "Edit · Site Editor | Number One Ultra Shine",
  robots: { index: false, follow: false },
}

// Always load the latest saved document (or the seed when storage is empty
// or unconfigured) — never a cached copy.
export const dynamic = "force-dynamic"

// /admin/edit            -> edits "/"
// /admin/edit/about      -> edits "/about"
// /admin/edit/services/x -> edits "/services/x"
export default async function EditPage({ params }: { params: Promise<{ path?: string[] }> }) {
  const segs = (await params).path ?? []
  const path = segs.length ? "/" + segs.map(decodeURIComponent).join("/") : "/"
  if (!EDITABLE_PATHS.has(path)) notFound()
  const data = (await getPage(path)) ?? SEEDS[path]
  return <PageEditor path={path} title={PAGE_TITLES[path] ?? path} initialData={data} />
}
