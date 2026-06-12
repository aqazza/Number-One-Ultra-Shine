"use client"

import { useEffect, useState } from "react"

// Interactive "diagnostic scan" of the vehicle: a blueprint-style top-down car
// with a sweeping beam. Each process step locks onto its zone; the side panel
// describes the step. Auto-cycles, click zones or numbers to jump.
export type ScanZone =
  | "floor" // cabin floor & footwells
  | "seats" // seats & upholstery
  | "dash" // dash, trim & interior glass
  | "cabin" // the whole interior
  | "body" // paint & bodywork
  | "wheels" // wheels & tires
  | "glass" // glass & brightwork
  | "all" // entire vehicle
export type ScanStep = { t: string; p: string; zone: ScanZone }

const ZONE_LABEL: Record<ScanZone, string> = {
  floor: "Floor & footwells",
  seats: "Seats & upholstery",
  dash: "Dash, trim & glass",
  cabin: "Complete cabin",
  body: "Paint & bodywork",
  wheels: "Wheels & tires",
  glass: "Glass & brightwork",
  all: "Entire vehicle",
}

// Which schematic groups light up for a given step zone.
const ACTIVE: Record<ScanZone, string[]> = {
  floor: ["floor"],
  seats: ["seats"],
  dash: ["dash", "glass"],
  cabin: ["floor", "seats", "dash", "glass"],
  body: ["body"],
  wheels: ["wheels"],
  glass: ["glass"],
  all: ["floor", "seats", "dash", "glass", "body", "wheels"],
}

export function CabinScanner({
  steps,
  tag = "Vehicle scan",
}: {
  steps: ScanStep[]
  tag?: string
}) {
  const [i, setI] = useState(0)
  const step = steps[i]
  const zone = step?.zone ?? "all"
  const lit = new Set(ACTIVE[zone] ?? [])
  const on = (group: string) => lit.has(group)

  // Auto-advance; restarts after any change (including manual jumps).
  // Respects prefers-reduced-motion (WCAG 2.2.2): no automatic movement.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => setI((x) => (x + 1) % steps.length), 4600)
    return () => clearInterval(t)
  }, [steps.length, i])

  // Jump to the next step matching any of the given zones (clicking a zone that
  // appears twice cycles through its steps).
  const jumpAny = (zones: ScanZone[]) => {
    for (const z of zones) {
      const idxs = steps.flatMap((s, n) => (s.zone === z ? [n] : []))
      if (idxs.length) {
        setI(idxs.find((n) => n > i) ?? idxs[0])
        return
      }
    }
  }

  return (
    <div className="cscan">
      <div className="cscan-stage">
        <div className="cscan-hud">
          <span className="cscan-tag">
            <i />
            {tag}
          </span>
        </div>
        <div className="cscan-beam" aria-hidden="true" />
        <svg viewBox="0 0 500 340" className="cscan-svg" aria-hidden="true">
          {/* blueprint corner ticks */}
          <path
            className="cmark"
            d="M30 22v16M22 30h16 M470 22v16M462 30h16 M30 302v16M22 310h16 M470 302v16M462 310h16"
            fill="none"
          />
          {/* zone: wheels & tires (tucked under the body) */}
          <g
            className={"cz cwheel" + (on("wheels") ? " on" : "")}
            onClick={() => jumpAny(["wheels", "all"])}
          >
            <rect x="96" y="66" width="52" height="22" rx="10" />
            <rect x="96" y="252" width="52" height="22" rx="10" />
            <rect x="352" y="66" width="52" height="22" rx="10" />
            <rect x="352" y="252" width="52" height="22" rx="10" />
          </g>
          {/* zone: paint & bodywork (outline, hood/trunk cuts, mirrors) */}
          <g
            className={"cz" + (on("body") ? " on" : "")}
            onClick={() => jumpAny(["body", "all"])}
          >
            <path
              className="cz-body"
              d="M42 170 C42 130 56 106 92 98 C130 90 170 84 230 82 C300 80 360 84 402 92 C440 99 458 128 458 170 C458 212 440 241 402 248 C360 256 300 260 230 258 C170 256 130 250 92 242 C56 234 42 210 42 170 Z"
            />
            <path d="M64 122 Q58 170 64 218" />
            <path d="M138 96 Q130 170 138 244" />
            <path d="M416 102 Q424 170 416 238" />
            <path d="M165 86L165 80 M165 254L165 260" />
            <rect x="155" y="70" width="20" height="10" rx="5" />
            <rect x="155" y="260" width="20" height="10" rx="5" />
          </g>
          {/* zone: cabin floor (sits under seats & console) */}
          <g
            className={"cz" + (on("floor") ? " on" : "")}
            onClick={() => jumpAny(["floor", "cabin", "all"])}
          >
            <rect x="196" y="100" width="184" height="140" rx="18" />
          </g>
          {/* zone: glass & brightwork */}
          <g
            className={"cz" + (on("glass") ? " on" : "")}
            onClick={() => jumpAny(["glass", "dash", "cabin", "all"])}
          >
            <path d="M152 98 Q144 170 152 242 L184 236 Q177 170 184 104 Z" />
            <path d="M372 104 Q378 170 372 236 L398 242 Q406 170 398 98 Z" />
            <rect x="190" y="88" width="174" height="9" rx="4.5" />
            <rect x="190" y="243" width="174" height="9" rx="4.5" />
          </g>
          {/* zone: dash & trim */}
          <g
            className={"cz" + (on("dash") ? " on" : "")}
            onClick={() => jumpAny(["dash", "cabin", "all"])}
          >
            <rect x="190" y="108" width="14" height="124" rx="7" />
            <rect x="206" y="160" width="92" height="20" rx="8" />
          </g>
          {/* zone: seats (cushion + seatback each, plus rear bench) */}
          <g
            className={"cz" + (on("seats") ? " on" : "")}
            onClick={() => jumpAny(["seats", "cabin", "all"])}
          >
            <rect x="226" y="106" width="54" height="46" rx="10" />
            <rect x="284" y="102" width="13" height="54" rx="6.5" />
            <rect x="226" y="188" width="54" height="46" rx="10" />
            <rect x="284" y="184" width="13" height="54" rx="6.5" />
            <rect x="308" y="104" width="44" height="132" rx="12" />
            <rect x="354" y="100" width="12" height="140" rx="6" />
          </g>
        </svg>
      </div>

      <div className="cscan-panel">
        <div className="cscan-info" key={i}>
          <span className="step">
            Step {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
          </span>
          <h3>{step?.t}</h3>
          <p>{step?.p}</p>
          <span className="cscan-target">
            <i />
            Target: {ZONE_LABEL[zone]}
          </span>
        </div>
        <div className="cscan-nav">
          {steps.map((s, n) => (
            <button
              key={n}
              type="button"
              className={n === i ? "on" : ""}
              onClick={() => setI(n)}
              aria-label={"Step " + String(n + 1).padStart(2, "0") + ": " + s.t}
            >
              {String(n + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
