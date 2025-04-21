"use client"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"

export interface WaterButtonProps extends ButtonProps {
  onClick?: () => void
}

export const WaterButton = forwardRef<HTMLButtonElement, WaterButtonProps>(
  ({ className, variant, size, children, onClick, ...props }, ref) => {
    return (
      <div className="relative group">
        <div
          className={cn(
            "absolute inset-0 blur-md opacity-40 group-hover:opacity-80 transition-all duration-500 rounded-md",
            variant === "default" || !variant
              ? "bg-gradient-to-r from-blue-500 to-cyan-400"
              : "bg-gradient-to-r from-blue-400/50 to-cyan-300/50",
          )}
        ></div>
        <Button
          ref={ref}
          variant={variant}
          size={size}
          onClick={onClick}
          className={cn(
            "relative overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1 shadow-none",
            variant === "default" || !variant
              ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
              : "",
            className,
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
        </Button>
      </div>
    )
  },
)

WaterButton.displayName = "WaterButton"
