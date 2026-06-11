"use client"

import { useEffect, useRef, type ReactNode, type ElementType } from "react"

// Scroll-reveal wrapper. Content is visible by default; JS arms the hidden state
// (body.anim-ready) then reveals on scroll. A failsafe timer guarantees content
// never stays hidden if the observer never fires.
export function Reveal({
  children,
  delay = 0,
  tag: Tag = "div" as ElementType,
  className = "",
}: {
  children: ReactNode
  delay?: number
  tag?: ElementType
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    document.body.classList.add("anim-ready")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.14 },
    )
    io.observe(el)
    const fallback = setTimeout(() => el.classList.add("in"), 1600 + delay)
    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
  }, [delay])

  // Tag is dynamic (div/section/etc.); cast so it accepts a ref + className.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Anon = Tag as any
  return (
    <Anon ref={ref} className={"reveal " + className}>
      {children}
    </Anon>
  )
}
