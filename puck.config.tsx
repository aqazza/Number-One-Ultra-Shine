import type { Config, Data } from "@measured/puck"
import { aboutBlocks, ABOUT_IMAGE_FIELDS, type AboutBlockProps } from "@/lib/puck/blocks/about"
import { homeBlocks, HOME_IMAGE_FIELDS, type HomeBlockProps } from "@/lib/puck/blocks/home"
import { galleryBlocks, GALLERY_IMAGE_FIELDS, type GalleryBlockProps } from "@/lib/puck/blocks/gallery"
import { contactBlocks, CONTACT_IMAGE_FIELDS, type ContactBlockProps } from "@/lib/puck/blocks/contact"

// Puck blocks wrap the site's EXISTING components. Only content is editable
// (headings, body copy, image URLs, lists, show/hide). Colors, spacing and
// typography are locked in CSS and deliberately not exposed as fields.

export type Blocks = AboutBlockProps & HomeBlockProps & GalleryBlockProps & ContactBlockProps

// The Puck document shape for pages built from these blocks.
export type PageData = Data<Blocks>

// Image-typed fields per block ("arrayField.key" for fields inside arrays).
// The editor swaps these text fields for the Vercel Blob upload field via
// lib/puck/editor-config; public pages keep plain text fields (zero editor JS).
export const IMAGE_FIELDS: Record<string, string[]> = {
  ...ABOUT_IMAGE_FIELDS,
  ...HOME_IMAGE_FIELDS,
  ...GALLERY_IMAGE_FIELDS,
  ...CONTACT_IMAGE_FIELDS,
}

export const config: Config<Blocks> = {
  categories: {
    home: {
      title: "Home sections",
      components: ["HomeHero", "TrustBar", "Services", "AboutTeaser", "WhyUs", "Reviews", "HomeContact"],
    },
    gallery: {
      title: "Gallery sections",
      components: ["GalleryGrid"],
    },
    contact: {
      title: "Contact sections",
      components: ["ContactHero", "ContactMain"],
    },
    about: {
      title: "About sections",
      components: ["AboutHero", "StatsBand", "Standards", "Timeline", "FamilyNote"],
    },
  },
  components: {
    ...aboutBlocks,
    ...homeBlocks,
    ...galleryBlocks,
    ...contactBlocks,
  } as Config<Blocks>["components"],
}

export default config
