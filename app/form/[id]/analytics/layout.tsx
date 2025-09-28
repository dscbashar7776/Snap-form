import type React from "react"
export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto w-full">{children}</div>
}
