import type { Metadata } from "next"
import { Atmos } from "@/components/site/atmos"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { GalleryGrid } from "@/components/site/gallery"

export const metadata: Metadata = {
  title: "Gallery · Before & After Detailing | Number One Ultra Shine",
  description:
    "Drag the slider to see the difference. Real before-and-after detailing work from Number One Ultra Shine in Glendora, CA.",
}

export default function GalleryPage() {
  return (
    <>
      <Atmos />
      <div className="page">
        <Header active="Gallery" />
        <GalleryGrid />
        <Footer />
      </div>
    </>
  )
}
