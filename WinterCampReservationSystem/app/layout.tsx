import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

export const metadata: Metadata = {
  title: "WinterCamp - Premium Winter Camping Reservations",
  description:
    "Book your perfect winter camping experience with WinterCamp. Premium sites, luxury glamping, and unforgettable outdoor adventures.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
