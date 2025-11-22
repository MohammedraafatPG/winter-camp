import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Heart, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">About WinterCamp</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-pretty">
            Dedicated to creating unforgettable outdoor experiences and connecting people with nature.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2015, WinterCamp began with a simple mission: to make winter camping accessible and enjoyable
                for everyone. What started as a small operation with just three camping sites has grown into a premier
                destination for outdoor enthusiasts.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We believe that everyone deserves to experience the tranquility and beauty of nature, especially during
                the magical winter months. Our team works tirelessly to maintain pristine camping facilities while
                preserving the natural environment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve thousands of happy campers each year, offering everything from basic tent sites to
                luxury glamping experiences.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img src="/camping-team-working-together-in-winter-forest.jpg" alt="Our team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "We love what we do and it shows in every detail",
              },
              {
                icon: Users,
                title: "Community",
                description: "Building lasting connections between campers and nature",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to providing the highest quality experience",
              },
              {
                icon: Target,
                title: "Sustainability",
                description: "Protecting the environment for future generations",
              },
            ].map((value, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6 text-center">
                  <value.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "/professional-woman-outdoor-guide-portrait.jpg",
              },
              {
                name: "Mike Chen",
                role: "Operations Director",
                image: "/professional-man-outdoor-guide-portrait.jpg",
              },
              {
                name: "Emma Davis",
                role: "Guest Experience Manager",
                image: "/professional-woman-hospitality-manager-portrait.jpg",
              },
            ].map((member, index) => (
              <Card key={index} className="border-border overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
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
