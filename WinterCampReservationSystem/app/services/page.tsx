import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tent, Home, Utensils, Wifi, Droplet, Zap, Shield, MapPin } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Everything you need for a comfortable and memorable camping experience.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Tent,
                title: "Tent Camping",
                description:
                  "Traditional camping experience with designated tent sites, fire pits, and picnic tables. Perfect for those who want to connect with nature.",
                features: ["Fire pit included", "Picnic table", "Nearby restrooms", "Water access"],
              },
              {
                icon: Home,
                title: "Glamping",
                description:
                  "Luxury camping with fully furnished tents, comfortable beds, and premium amenities. Enjoy nature without sacrificing comfort.",
                features: ["Queen-size bed", "Heating system", "Private bathroom", "Electricity"],
              },
              {
                icon: Utensils,
                title: "Meal Services",
                description:
                  "Delicious, locally-sourced meals prepared by our expert chefs. Choose from breakfast, lunch, and dinner options.",
                features: ["Fresh ingredients", "Dietary accommodations", "Campfire cooking", "Meal packages"],
              },
              {
                icon: MapPin,
                title: "Guided Tours",
                description:
                  "Explore the wilderness with our experienced guides. Learn about local flora, fauna, and the best hiking trails.",
                features: ["Expert guides", "Safety equipment", "Group or private", "All skill levels"],
              },
            ].map((service, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Facilities & Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Wifi, label: "Free WiFi" },
              { icon: Droplet, label: "Hot Showers" },
              { icon: Zap, label: "Power Outlets" },
              { icon: Shield, label: "24/7 Security" },
            ].map((amenity, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6 text-center">
                  <amenity.icon className="w-10 h-10 text-primary mb-3 mx-auto" />
                  <p className="font-medium">{amenity.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience WinterCamp?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your stay today and enjoy all our premium services and amenities.
          </p>
          <Button asChild size="lg">
            <Link href="/reserve">Make a Reservation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
