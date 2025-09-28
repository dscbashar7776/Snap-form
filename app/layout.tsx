import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "@/app/globals.css"
import { HeaderNav } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ThemeScript } from "@/components/theme-script"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
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
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeScript />
          <HeaderNav />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
