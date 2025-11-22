"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Lock, User, ArrowLeft } from "lucide-react"

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-md">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* 3D Flip Card Container */}
          <div className="perspective-1000">
            <div
              className={`relative w-full transition-transform duration-700 transform-style-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.7s",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Login Card (Front) */}
              <Card
                className="w-full border-2 border-border shadow-2xl backface-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground">Sign in to your WinterCamp account</p>
                  </div>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input id="login-email" type="email" placeholder="your@email.com" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input id="login-password" type="password" placeholder="••••••••" className="pl-10" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-muted-foreground">Remember me</span>
                      </label>
                      <Link href="/forgot-password" className="text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Sign In
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <button onClick={() => setIsFlipped(true)} className="text-primary font-semibold hover:underline">
                        Sign Up
                      </button>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Signup Card (Back) */}
              <Card
                className="absolute top-0 left-0 w-full border-2 border-border shadow-2xl backface-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">Join WinterCamp</h1>
                    <p className="text-muted-foreground">Create your account and start your adventure</p>
                  </div>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input id="signup-name" type="text" placeholder="John Doe" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input id="signup-email" type="email" placeholder="your@email.com" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input id="signup-password" type="password" placeholder="••••••••" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input id="signup-confirm" type="password" placeholder="••••••••" className="pl-10" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Create Account
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <button
                        onClick={() => setIsFlipped(false)}
                        className="text-primary font-semibold hover:underline"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
