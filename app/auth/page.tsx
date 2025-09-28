"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { useToast } from "@/hooks/use-toast"

export default function AuthPage() {
  const { toast } = useToast()
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-center">Sign in to Snap-form</CardTitle>
          <CardDescription className="text-center">
            Use your Google account to get started. This is a mock UI only.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button
            variant="secondary"
            className="gap-2"
            onClick={() =>
              toast({
                title: "Mock sign-in",
                description: "This is UI-only. No real authentication.",
              })
            }
          >
            <FcGoogle className="h-5 w-5" />
            Get started with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
