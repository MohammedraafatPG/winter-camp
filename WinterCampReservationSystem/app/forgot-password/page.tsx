"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-md">
          <Link
            href="/auth"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Login
          </Link>

          <Card className="border-2 border-border shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-primary mb-2">Forgot Password?</h1>
                <p className="text-muted-foreground">
                  No worries! Enter your email and we'll send you reset instructions.
                </p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="reset-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input id="reset-email" type="email" placeholder="your@email.com" className="pl-10" required />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Reset Link
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Remember your password?{" "}
                  <Link href="/auth" className="text-primary font-semibold hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
