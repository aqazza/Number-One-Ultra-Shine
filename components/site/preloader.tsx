"use client"

import { useEffect, useState } from "react"

/**
 * Branded first-load screen. Renders in the server HTML so it covers the page
 * immediately (no flash of unstyled content), then fades out once the window
 * has loaded — with a hard fallback timeout so it can never get stuck. It only
 * mounts on a full page load, so client-side route changes won't re-trigger it.
 */
export function Preloader() {
  const [out, setOut] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const start = performance.now()
    let hideTimer: ReturnType<typeof setTimeout>
    let goneTimer: ReturnType<typeof setTimeout>

    const dismiss = () => {
      // Keep it on screen long enough to actually be seen (min ~900ms).
      const wait = Math.max(0, 900 - (performance.now() - start))
      hideTimer = setTimeout(() => {
        setOut(true)
        // Cue the page underneath to fade up as the backdrop lifts away.
        document.body.classList.add("uss-revealed")
        goneTimer = setTimeout(() => setGone(true), 950) // covers the sequenced exit
      }, wait)
    }

    if (document.readyState === "complete") dismiss()
    else window.addEventListener("load", dismiss, { once: true })

    // Safety net: never let the loader trap the page on a slow/failed asset.
    const failsafe = setTimeout(dismiss, 4000)

    return () => {
      window.removeEventListener("load", dismiss)
      clearTimeout(hideTimer)
      clearTimeout(goneTimer)
      clearTimeout(failsafe)
    }
  }, [])

  // Lock scrolling while the loader covers the page.
  useEffect(() => {
    if (gone) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [gone])

  if (gone) return null

  return (
    <div className={"uss-preloader" + (out ? " out" : "")} aria-hidden="true">
      <div className="pl-inner">
        <div className="pl-logo">
          <span className="pl-ring" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ultra-shine-mark.webp" alt="" width={96} height={96} />
        </div>
        <div className="pl-word">
          <span className="a">
            <span className="one">Number One</span> Ultra Shine
          </span>
          <span className="b">Premium Auto Detailing</span>
        </div>
        <div className="pl-bar">
          <i />
        </div>
      </div>
    </div>
  )
}
