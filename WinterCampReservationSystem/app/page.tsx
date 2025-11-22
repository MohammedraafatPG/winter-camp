import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Tent, Mountain, Flame, Star, Shield, Clock, Award, UserPlus } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/10 pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Discover Your Perfect
            <span className="block text-primary mt-2">Winter Escape</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Experience the magic of winter camping with premium facilities, breathtaking views, and unforgettable
            memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Link href="/auth">
                <UserPlus className="mr-2" size={20} />
                Get Started
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg border-2 hover:bg-accent/50 transition-all bg-transparent"
            >
              <Link href="/offers">View Offers</Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto mt-16 relative z-10">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <img
              src="/stunning-winter-camping-scene-with-tent-under-starry-sky.jpg"
              alt="Winter camping scene with tent under starry sky"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose WinterCamp?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We provide everything you need for an unforgettable outdoor adventure
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tent,
                title: "Premium Sites",
                description: "Carefully selected camping locations with stunning views",
              },
              {
                icon: Mountain,
                title: "Nature Access",
                description: "Direct access to hiking trails and natural wonders",
              },
              {
                icon: Flame,
                title: "Full Amenities",
                description: "Modern facilities including fire pits and clean restrooms",
              },
              {
                icon: Star,
                title: "Expert Guides",
                description: "Professional staff to ensure your safety and comfort",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Shield, label: "100% Safe", value: "Certified Sites" },
              { icon: Clock, label: "24/7 Support", value: "Always Available" },
              { icon: Award, label: "5 Star Rated", value: "By 1000+ Campers" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/abstract-nature-pattern.png')] opacity-10 mix-blend-overlay" />
            <CardContent className="p-12 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Adventure?</h2>
              <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
                Book your winter camping experience today and create memories that will last a lifetime.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Link href="/reserve">Start Booking</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews/Testimonials Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Campers Say</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of happy campers who have experienced the magic of WinterCamp
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                location: "Colorado",
                rating: 5,
                review:
                  "Absolutely incredible experience! The facilities were top-notch and the staff went above and beyond to make our stay memorable. Can't wait to come back!",
                image: "/woman-smiling-outdoor-portrait.jpg",
              },
              {
                name: "Michael Chen",
                location: "California",
                rating: 5,
                review:
                  "Best camping trip ever! The location was stunning, and everything was so well organized. Perfect for families and solo adventurers alike.",
                image: "/man-smiling-outdoor-portrait.jpg",
              },
              {
                name: "Emily Rodriguez",
                location: "Oregon",
                rating: 5,
                review:
                  "WinterCamp exceeded all expectations. The winter scenery was breathtaking, and the amenities made it comfortable even in cold weather. Highly recommend!",
                image: "/woman-happy-outdoor-portrait.jpg",
              },
              {
                name: "David Thompson",
                location: "Washington",
                rating: 5,
                review:
                  "Professional staff, beautiful sites, and an unforgettable experience. The guided tours were fantastic and really enhanced our trip.",
                image: "/man-outdoor-adventure-portrait.jpg",
              },
              {
                name: "Lisa Martinez",
                location: "Montana",
                rating: 5,
                review:
                  "Perfect getaway from city life! The peaceful environment and stunning nature views made this the best vacation we've had in years.",
                image: "/woman-nature-portrait.jpg",
              },
              {
                name: "James Wilson",
                location: "Idaho",
                rating: 5,
                review:
                  "Great value for money! Everything from booking to checkout was seamless. The fire pits and stargazing opportunities were highlights of our trip.",
                image: "/man-camping-portrait.jpg",
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">"{review.review}"</p>
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
