"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <Mail className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">info@wintercamp.com</p>
                  <p className="text-sm text-muted-foreground">support@wintercamp.com</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Mountain View Road
                    <br />
                    Mountain View, CA 94043
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Mon - Fri: 8:00 AM - 8:00 PM
                    <br />
                    Sat - Sun: 9:00 AM - 6:00 PM
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What should I bring for winter camping?",
                answer:
                  "We recommend warm clothing, sleeping bags rated for cold weather, and personal items. We provide tents, cooking equipment, and other essentials.",
              },
              {
                question: "Can I cancel or modify my reservation?",
                answer:
                  "Yes, you can cancel or modify your reservation up to 48 hours before check-in for a full refund. Contact us for assistance.",
              },
              {
                question: "Are pets allowed?",
                answer:
                  "Yes! We welcome well-behaved pets at designated pet-friendly sites. Additional fees may apply.",
              },
              {
                question: "Do you offer group discounts?",
                answer: "Groups of 4 or more receive a 20% discount. Check our Offers page for more details.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
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
