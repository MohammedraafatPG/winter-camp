import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Zap, Calendar, Users, Gift } from "lucide-react"

export default function OffersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Special Offers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Take advantage of our exclusive deals and flash sales for unforgettable camping experiences.
          </p>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Flash Sales</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Weekend Warrior",
                discount: "40% OFF",
                description: "Book any weekend stay and save big! Perfect for quick getaways.",
                validUntil: "Valid until Dec 31, 2025",
                badge: "Limited Time",
              },
              {
                title: "Early Bird Special",
                discount: "30% OFF",
                description: "Book 30 days in advance and enjoy significant savings on your stay.",
                validUntil: "Valid for all 2025 bookings",
                badge: "Popular",
              },
            ].map((offer, index) => (
              <Card key={index} className="border-primary border-2 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{offer.badge}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{offer.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{offer.discount}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{offer.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{offer.validUntil}</p>
                  <Button asChild className="w-full">
                    <Link href="/reserve">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Offers */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Seasonal Offers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "Extended Stay Discount",
                discount: "25% OFF",
                description: "Stay 5 nights or more and receive 25% off your total booking.",
              },
              {
                icon: Users,
                title: "Group Booking",
                discount: "20% OFF",
                description: "Book for 4+ people and save 20%. Perfect for family reunions!",
              },
              {
                icon: Gift,
                title: "First-Time Camper",
                discount: "15% OFF",
                description: "New to WinterCamp? Enjoy 15% off your first reservation with us.",
              },
            ].map((offer, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <offer.icon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl mb-2">{offer.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{offer.discount}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{offer.description}</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/reserve">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Package Deals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Adventure Package",
                price: "$299",
                description: "Complete camping experience with guided tours and meals included.",
                includes: [
                  "3 nights camping",
                  "All meals included",
                  "2 guided hiking tours",
                  "Campfire experience",
                  "Equipment rental",
                ],
              },
              {
                title: "Luxury Glamping Package",
                price: "$599",
                description: "Premium glamping with spa services and gourmet dining.",
                includes: [
                  "2 nights luxury glamping",
                  "Gourmet meal service",
                  "Spa treatments",
                  "Private guide",
                  "Welcome gift basket",
                ],
              },
            ].map((pkg, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-muted-foreground text-sm">per person</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{pkg.description}</p>
                  <div className="mb-6">
                    <p className="font-semibold mb-3">Package Includes:</p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/reserve">Book Package</Link>
                  </Button>
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
