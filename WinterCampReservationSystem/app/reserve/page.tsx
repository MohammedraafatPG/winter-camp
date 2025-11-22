"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Tent } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"

export default function ReservePage() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    guests: "2",
    siteType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reservation submitted:", { ...formData, checkIn, checkOut })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Reserve Your Spot</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Book your perfect winter camping experience in just a few simple steps.
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Site Options */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Available Sites</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      icon: Tent,
                      name: "Standard Tent Site",
                      price: "$45/night",
                      capacity: "Up to 4 people",
                    },
                    {
                      icon: Tent,
                      name: "Premium Tent Site",
                      price: "$75/night",
                      capacity: "Up to 6 people",
                    },
                    {
                      icon: Tent,
                      name: "Luxury Glamping",
                      price: "$150/night",
                      capacity: "Up to 4 people",
                    },
                  ].map((site, index) => (
                    <div
                      key={index}
                      className="p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <site.icon className="w-5 h-5 text-primary mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1">{site.name}</h3>
                          <p className="text-xs text-muted-foreground mb-1">{site.capacity}</p>
                          <p className="text-sm font-semibold text-primary">{site.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="md:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Booking Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dates */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Check-in Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal bg-transparent"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkIn ? format(checkIn, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label>Check-out Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal bg-transparent"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkOut ? format(checkOut, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    {/* Site Type and Guests */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="siteType">Site Type</Label>
                        <Select
                          value={formData.siteType}
                          onValueChange={(value) => setFormData({ ...formData, siteType: value })}
                        >
                          <SelectTrigger id="siteType">
                            <SelectValue placeholder="Select site type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard Tent Site</SelectItem>
                            <SelectItem value="premium">Premium Tent Site</SelectItem>
                            <SelectItem value="glamping">Luxury Glamping</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Select
                          value={formData.guests}
                          onValueChange={(value) => setFormData({ ...formData, guests: value })}
                        >
                          <SelectTrigger id="guests">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Guest" : "Guests"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Complete Reservation
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By completing this reservation, you agree to our terms and conditions.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Check-in",
                description: "Arrive anytime after 2:00 PM. Our staff will guide you to your site.",
              },
              {
                title: "Your Stay",
                description: "Enjoy all amenities and activities. Staff available 24/7 for assistance.",
              },
              {
                title: "Check-out",
                description: "Check out by 11:00 AM. Late checkout available upon request.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
