import type React from "react"
export default function PublicFormLayout({ children }: { children: React.ReactNode }) {
  // No nav bar (handled globally), but keep constrained width
  return <div className="max-w-3xl mx-auto w-full">{children}</div>
}
