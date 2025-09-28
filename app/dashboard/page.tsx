"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

const mockForms = Array.from({ length: 10 }).map((_, i) => ({
  id: `form-${i + 1}`,
  title: `Customer Feedback ${i + 1}`,
  updatedAt: "Sep 10, 2025",
}))

const templates = [
  { id: "t1", title: "Contact" },
  { id: "t2", title: "Feedback" },
  { id: "t3", title: "Job Application" },
  { id: "t4", title: "Survey" },
]

export default function DashboardPage() {
  const [showAll, setShowAll] = useState(false)

  const visibleForms = showAll ? mockForms : mockForms.slice(0, 5)

  return (
    <div className="px-6 py-6 space-y-8">
      {/* Top Section: Chat-like box */}
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Create form with agent AI</CardTitle>
            <CardDescription>Describe the form you want and let the agent suggest a starting point.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="rounded-md border p-3 w-full">
              <div className="text-sm text-muted-foreground">
                Hi! Tell me what form you need. For example: {"'"}A product feedback form with ratings and optional
                email.
                {"'"}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Your Forms</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setShowAll((s) => !s)}>
              {showAll ? "Show Less" : "See All"}
            </Button>
            <Button asChild size="sm">
              <Link href="/create">
                <Plus className="h-4 w-4 mr-2" />
                New Form
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Create New Form Card */}
          <motion.div layout>
            <Card className="h-full">
              <CardContent className="h-full flex items-center justify-center py-12">
                <Button asChild variant="secondary" className="gap-2">
                  <Link href="/create">
                    <Plus className="h-4 w-4" />
                    Create New Form
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {visibleForms.map((f) => (
            <motion.div key={f.id} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                  <CardDescription>Updated {f.updatedAt}</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-2">
                  {/* View */}
                  <Button asChild size="sm" variant="secondary">
                    <Link href={`/form/${f.id}`}>View</Link>
                  </Button>
                  {/* Edit */}
                  <Button asChild size="sm">
                    <Link href={`/edit/${f.id}`}>Edit</Link>
                  </Button>
                  {/* Analytics */}
                  <Button asChild size="sm" variant="ghost">
                    <Link href={`/form/${f.id}/analytics`}>Analytics</Link>
                  </Button>
                  {/* Optional quick menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="ml-auto">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/form/${f.id}`}>View Form</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/edit/${f.id}`}>Edit Form</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/form/${f.id}/analytics`}>Analytics</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => alert("Mock delete")}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Templates Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Templates</h2>
          <Button size="sm" variant="ghost">
            Browse
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {templates.map((t) => (
            <Card key={t.id} className="hover:bg-accent/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-base">{t.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild size="sm" variant="secondary">
                  <Link href="/create">Use Template</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
