"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme">
        <Sun className="h-4 w-4" />
      </Button>
    )

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => {
        const root = document.documentElement
        const nowDark = !root.classList.contains("dark")
        root.classList.toggle("dark", nowDark)
        try {
          localStorage.setItem("theme", nowDark ? "dark" : "light")
        } catch {}
      }}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
