import type { GalleryGridProps } from "@/components/site/gallery"

// The CURRENT gallery page content, verbatim — Puck defaults + DB seed source.
export const GALLERY_GRID: GalleryGridProps = {
  eyebrow: "Before & after",
  heading: "See the difference",
  intro:
    "Drag the slider across each photo to reveal the transformation, from grimy to gleaming. Real detailing work, with more results added all the time.",
  pairs: [
    {
      before: "/photos/gallery/wheel-before.webp",
      after: "/photos/gallery/wheel-after.webp",
      cat: "Wheels",
      label: "Brake-dust grime to spotless silver alloys",
    },
    {
      before: "/photos/gallery/carpet-before.webp",
      after: "/photos/gallery/carpet-after.webp",
      cat: "Interior",
      label: "Trash and stains shampooed out of the carpet",
    },
    {
      before: "/photos/gallery/wash-before.webp",
      after: "/photos/gallery/wash-after.webp",
      cat: "Exterior",
      label: "Mud-caked SUV washed back to a glossy black",
    },
    {
      before: "/photos/gallery/seat-before.webp",
      after: "/photos/gallery/seat-after.webp",
      cat: "Interior",
      label: "Grimy cloth seats shampooed like new",
    },
    {
      before: "/photos/gallery/paint-before.webp",
      after: "/photos/gallery/paint-after.webp",
      cat: "Exterior",
      label: "Faded classic paint polished to a deep gloss",
    },
    {
      before: "/photos/gallery/foam-before.webp",
      after: "/photos/gallery/foam-after.webp",
      cat: "Exterior",
      label: "Blue M Sport refined to a mirror gloss",
    },
  ],
}
