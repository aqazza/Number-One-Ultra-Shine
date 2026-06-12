import type { ReactElement } from "react"

// Helpers shared by all Puck block definitions. Every block gets a
// Show/Hide visibility radio; design decisions stay locked in CSS.

export type Hideable = { hidden: "show" | "hide" }

export const HIDDEN_FIELD = {
  type: "radio" as const,
  label: "Visibility",
  options: [
    { label: "Show", value: "show" },
    { label: "Hide", value: "hide" },
  ],
}

// Base config keeps images as plain text fields so public pages bundle zero
// editor code; lib/puck/editor-config swaps them for the upload field using
// the IMAGE_FIELDS registry in puck.config.
export const img = (label: string) => ({ type: "text" as const, label })

export function hideable<P extends object>(
  C: (p: P) => ReactElement,
): (props: Hideable & P) => ReactElement {
  const Wrapped = ({ hidden, ...rest }: Hideable & P) => {
    // Strip Puck-injected props (puck.renderDropZone etc. are functions and
    // cannot cross the RSC boundary into client components).
    const { puck: _puck, editMode: _editMode, id: _id, ...p } = rest as Record<string, unknown>
    return hidden === "hide" ? <></> : <C {...(p as unknown as P)} />
  }
  return Wrapped
}
