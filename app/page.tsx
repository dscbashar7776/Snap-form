import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-6 px-6">
      <h1 className="text-4xl md:text-5xl font-semibold text-balance">Snap-form</h1>
      <p className="text-muted-foreground max-w-xl leading-relaxed text-pretty">
        Build modern forms in minutes. Share instantly. Analyze responses with clean, insightful charts.
      </p>
      
      <div className="pt-2">
        <Button asChild>
          <Link href="/auth">Get Started</Link>
        </Button>
      </div>
    </section>
  )
}
