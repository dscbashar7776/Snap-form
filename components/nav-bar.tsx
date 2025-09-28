"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HeaderNav() {
  const pathname = usePathname()

  // No nav on "/", "/auth", "/form/[id]"
  const hide =
    pathname === "/" ||
    pathname.startsWith("/auth") ||
    (pathname.startsWith("/form/") && pathname.split("/").length === 3)

  if (hide) return null

  return (
    <header className="w-full flex items-center justify-between px-6 py-3 border-b bg-background/80 backdrop-blur">
      <div className="flex items-center gap-2">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md border flex items-center justify-center text-xs">
            <img src="./Logo.png" alt="Logo" className="p-[0.5px] rounded-md"/>
          </div>
          <span className="font-medium">Snap-form</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-6 w-6">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile">Plans</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                /* mock logout */
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
