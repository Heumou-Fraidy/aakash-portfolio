import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Feupa Heumou Fraidy Cadin - Front-end Developer & UI/UX Designer",
  description:
    "Portfolio of Feupa Heumou Fraidy Cadin, a Front-end Developer and UI/UX Designer specializing in Flutter, Photoshop, and more.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
