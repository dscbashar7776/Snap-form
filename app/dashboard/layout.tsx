import type React from "react"
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Wrapper layout for future sidebar (if needed). Keeps dashboard focused.
  return <div className="max-w-7xl mx-auto w-full">{children}</div>
}
