import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t px-6 py-4 flex items-center justify-center">
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        All rights reserved to OpenLabs
        <Button asChild size="icon" variant="ghost" className="h-7 w-7" aria-label="OpenLabs website">
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </p>
    </footer>
  )
}
