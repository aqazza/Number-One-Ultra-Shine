import type { ReactNode, MouseEvent } from "react"
import { Icon } from "./icon"

type BtnVariant = "primary" | "secondary" | "ghost"

export function Btn({
  children,
  variant = "primary",
  size,
  href = "#",
  onClick,
  icon,
  iconRight,
}: {
  children: ReactNode
  variant?: BtnVariant
  size?: "sm" | "lg"
  href?: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  icon?: string
  iconRight?: string
}) {
  const cls = ["uss-btn", "uss-btn--" + variant, size ? "uss-btn--" + size : ""].join(" ").trim()
  return (
    <a className={cls} href={href} onClick={onClick}>
      {icon && <Icon name={icon} size={18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={18} />}
    </a>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="uss-badge">
      <span className="dot" />
      {children}
    </span>
  )
}

export function Stars({ n = 5, size = 18 }: { n?: number; size?: number }) {
  const star = "M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z"
  return (
    <div className="stars" role="img" aria-label={n + " star rating"}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width={size} height={size} className={i < n ? "on" : ""}>
          <path d={star} />
        </svg>
      ))}
    </div>
  )
}
