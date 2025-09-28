"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const datasets: Record<"1W" | "1M" | "1Y", Array<{ label: string; count: number }>> = {
  "1W": [
    { label: "Mon", count: 12 },
    { label: "Tue", count: 18 },
    { label: "Wed", count: 9 },
    { label: "Thu", count: 22 },
    { label: "Fri", count: 15 },
    { label: "Sat", count: 11 },
    { label: "Sun", count: 17 },
  ],
  "1M": [
    { label: "08/25", count: 10 },
    { label: "08/28", count: 14 },
    { label: "08/31", count: 9 },
    { label: "09/03", count: 18 },
    { label: "09/06", count: 13 },
    { label: "09/09", count: 21 },
    { label: "09/12", count: 15 },
    { label: "09/15", count: 24 },
    { label: "09/18", count: 16 },
    { label: "09/21", count: 19 },
  ],
  "1Y": [
    { label: "Oct", count: 120 },
    { label: "Nov", count: 138 },
    { label: "Dec", count: 132 },
    { label: "Jan", count: 146 },
    { label: "Feb", count: 154 },
    { label: "Mar", count: 162 },
    { label: "Apr", count: 151 },
    { label: "May", count: 170 },
    { label: "Jun", count: 164 },
    { label: "Jul", count: 176 },
    { label: "Aug", count: 181 },
    { label: "Sep", count: 189 },
  ],
}

const submissions = Array.from({ length: 8 }).map((_, i) => ({
  id: `sub-${i + 1}`,
  email: `user${i + 1}@example.com`,
  rating: Math.ceil(Math.random() * 5),
  date: "2025-09-20",
}))

export default function AnalyticsPage() {
  const [range, setRange] = useState<"1W" | "1M" | "1Y">("1W")
  const data = datasets[range]

  return (
    <div className="px-6 py-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium">Form Analytics</h1>
        <Button variant="secondary">Download PDF</Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle>Responses Over Time</CardTitle>
            <CardDescription>
              {range === "1W"
                ? "Daily submissions (last 7 days)"
                : range === "1M"
                  ? "Submissions across the last month"
                  : "Monthly submissions (last 12 months)"}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 rounded-md border p-1">
            <Button
              size="sm"
              variant={range === "1W" ? "default" : "ghost"}
              onClick={() => setRange("1W")}
              aria-pressed={range === "1W"}
            >
              1W
            </Button>
            <Button
              size="sm"
              variant={range === "1M" ? "default" : "ghost"}
              onClick={() => setRange("1M")}
              aria-pressed={range === "1M"}
            >
              1M
            </Button>
            <Button
              size="sm"
              variant={range === "1Y" ? "default" : "ghost"}
              onClick={() => setRange("1Y")}
              aria-pressed={range === "1Y"}
            >
              1Y
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              count: { label: "Responses", color: "hsl(var(--chart-1))" },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis allowDecimals={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="var(--color-count)"
                  fill="var(--color-count)"
                  fillOpacity={0.2}
                  name="Responses"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Submissions</CardTitle>
          <CardDescription>Latest entries</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-mono text-xs">{s.id}</TableCell>
                  <TableCell>{s.email}</TableCell>
                  <TableCell>{s.rating}</TableCell>
                  <TableCell>{s.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
