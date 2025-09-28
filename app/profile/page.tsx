import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    features: ["Up to 3 forms", "Basic analytics", "Community support"],
    cta: "Choose Free",
    variant: "secondary" as const,
  },
  {
    name: "Premium",
    price: "$12/mo",
    features: ["Unlimited forms", "Advanced analytics", "Priority support"],
    cta: "Choose Premium",
    variant: "default" as const,
  },
  {
    name: "Business",
    price: "$29/mo",
    features: ["Team workspaces", "Export & PDF", "SLA & SSO (mock)"],
    cta: "Choose Business",
    variant: "secondary" as const,
  },
]

export default function ProfilePage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-semibold text-center mb-8">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((t) => (
          <Card key={t.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{t.name} Tier</CardTitle>
              <CardDescription>{t.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-3">
              <ul className="space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4" /> {f}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button className="w-full" variant={t.variant}>
                  {t.cta}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
