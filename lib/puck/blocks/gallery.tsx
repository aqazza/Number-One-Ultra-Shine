import type { ComponentConfig } from "@measured/puck"
import { GalleryGrid, type GalleryGridProps } from "@/components/site/gallery"
import { GALLERY_GRID } from "@/lib/puck/gallery-content"
import { HIDDEN_FIELD, hideable, img, type Hideable } from "./shared"

export type GalleryBlockProps = {
  GalleryGrid: Hideable & GalleryGridProps
}

export const GALLERY_IMAGE_FIELDS: Record<string, string[]> = {
  GalleryGrid: ["pairs.before", "pairs.after"],
}

const galleryGrid: ComponentConfig<GalleryBlockProps["GalleryGrid"]> = {
  label: "Before & after gallery",
  fields: {
    hidden: HIDDEN_FIELD,
    eyebrow: { type: "text", label: "Eyebrow" },
    heading: { type: "text", label: "Heading" },
    intro: { type: "textarea", label: "Intro" },
    pairs: {
      type: "array",
      label: "Before/after pairs",
      arrayFields: {
        before: img("Before photo"),
        after: img("After photo"),
        cat: {
          type: "select",
          label: "Category",
          options: [
            { label: "Interior", value: "Interior" },
            { label: "Exterior", value: "Exterior" },
            { label: "Wheels", value: "Wheels" },
          ],
        },
        label: { type: "text", label: "Caption" },
      },
      defaultItemProps: {
        before: "/photos/gallery/wash-before.webp",
        after: "/photos/gallery/wash-after.webp",
        cat: "Exterior",
        label: "New transformation",
      },
      getItemSummary: (item) => item.label,
    },
  },
  defaultProps: { hidden: "show", ...GALLERY_GRID },
  render: hideable(GalleryGrid),
}

export const galleryBlocks = {
  GalleryGrid: galleryGrid,
}
