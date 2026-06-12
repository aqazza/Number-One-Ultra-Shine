"use client"

import type { Config } from "@measured/puck"
import config, { IMAGE_FIELDS } from "@/puck.config"
import { imageField } from "./fields/image-upload"

// Editor-only view of the config: swaps registered image text fields for the
// Vercel Blob upload field. Public pages render with the base config and
// never bundle the editor/upload code.
/* eslint-disable @typescript-eslint/no-explicit-any */
export function buildEditorConfig(): Config {
  const components: Record<string, any> = {}
  for (const [name, def] of Object.entries(config.components as Record<string, any>)) {
    const fields = { ...def.fields }
    for (const spec of IMAGE_FIELDS[name] ?? []) {
      const [head, key] = spec.split(".")
      if (key) {
        // image inside an array field's items
        const arr = fields[head]
        if (arr?.type === "array") {
          fields[head] = {
            ...arr,
            arrayFields: {
              ...arr.arrayFields,
              [key]: imageField(arr.arrayFields?.[key]?.label ?? key),
            },
          }
        }
      } else if (fields[head]) {
        fields[head] = imageField(fields[head].label ?? head)
      }
    }
    components[name] = { ...def, fields }
  }
  return { ...config, components } as Config
}
