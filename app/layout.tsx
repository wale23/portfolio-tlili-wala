import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3 as Source_Sans_Pro, Playfair_Display } from "next/font/google"
import "./globals.css"

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-pro",
  weight: ["400", "600", "700"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Wala Tlili | Software Developer",
    description:
        "Portfolio of Wala Tlili, a front-end developer specialized in ReactJS with experience building modern SaaS applications.",
  generator: "v0.app",
    icons: {
        icon: "/logo.svg",
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${sourceSansPro.variable} ${playfairDisplay.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
