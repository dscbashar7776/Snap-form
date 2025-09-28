import type React from "react"
export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto w-full">{children}</div>
}
