import type React from "react"
import type { Metadata } from "next"
import { Preloader } from "@/components/site/preloader"
import "./globals.css"
// Design-system foundations (order matters: tokens → primitives → layout)
import "./styles/colors_and_type.css"
import "./styles/uss-components.css"
import "./styles/site.css"

export const metadata: Metadata = {
  title: {
    default: "Number One Ultra Shine · Premium Auto Detailing in Glendora, CA",
    template: "%s | Number One Ultra Shine",
  },
  description:
    "Family-run auto detailing in Glendora, CA since 1995. Interior, exterior, full details and ceramic coating, hand-finished with care.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Brand fonts: Clash Display (Fontshare), Manrope + Space Mono (Google) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  )
}
