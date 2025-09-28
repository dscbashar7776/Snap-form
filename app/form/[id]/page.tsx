import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PublicFormPage() {
  return (
    <div className="px-6 py-8 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Customer Feedback</CardTitle>
          <CardDescription>We value your thoughts. This is a mock public form.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm">Your Name</label>
            <Input placeholder="Jane Doe" />
          </div>
          <div className="space-y-1">
            <label className="text-sm">Email (optional)</label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-1">
            <label className="text-sm">Message</label>
            <Textarea placeholder="Share your thoughts..." />
          </div>
          <Button className="w-full">Submit</Button>
        </CardContent>
      </Card>
    </div>
  )
}
