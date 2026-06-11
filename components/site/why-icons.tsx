import type { ReactNode } from "react"

// Custom, brand-specific line icons for the "Why choose us" pillars.
// Drawn on a 24x24 grid to match the Lucide set already in use; sizing
// (width:1em) + stroke-width come from `.ic svg`, color from the tile accent
// via currentColor, so these inherit per-card accents like the rest.
const PATHS: Record<string, ReactNode> = {
  // Water droplet with an inner shine/leaf curve: eco wash + water reclamation
  "eco-drop": (
    <>
      <path d="M12 3C12 3 18 9.4 18 13.6A6 6 0 0 1 6 13.6C6 9.4 12 3 12 3Z" />
      <path d="M9.3 13.9C11.1 14.6 13.2 13.8 14.5 11.8" />
    </>
  ),
  // Circular buffing motion with a shine sparkle at center: hand-finished craft
  "buff-swirl": (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 5.5V9.2H16.3" />
      <path d="M12 9.6 12.7 11.3 14.4 12 12.7 12.7 12 14.4 11.3 12.7 9.6 12 11.3 11.3Z" />
    </>
  ),
  // Sealed rosette / medal with a check and ribbon tails: the guarantee
  "guard-seal": (
    <>
      <circle cx="12" cy="9.5" r="5.5" />
      <path d="M9.6 9.4 11.3 11.1 14.6 7.8" />
      <path d="M8.4 13.8 6.8 20.8 12 18 17.2 20.8 15.6 13.8" />
    </>
  ),
}

export function WhyIcon({ name, size = 26 }: { name: string; size?: number }) {
  const paths = PATHS[name]
  if (!paths) return null
  return (
    <span className="ic" style={{ fontSize: size, display: "inline-flex" }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {paths}
      </svg>
    </span>
  )
}
