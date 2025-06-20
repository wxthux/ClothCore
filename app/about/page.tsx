import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Calendar, Users, Trophy, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started in a small garage with a vision to revolutionize custom apparel printing.",
    },
    {
      year: "2017",
      title: "First Major Contract",
      description: "Secured our first enterprise client, printing 10,000 custom t-shirts for a tech startup.",
    },
    {
      year: "2019",
      title: "Facility Expansion",
      description: "Moved to our current 50,000 sq ft facility and invested in state-of-the-art equipment.",
    },
    {
      year: "2021",
      title: "Sustainability Initiative",
      description: "Launched our eco-friendly product line using 100% organic and recycled materials.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Won 'Best Custom Apparel Manufacturer' award from the National Printing Association.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened international shipping to serve customers in over 50 countries worldwide.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in textile industry, passionate about sustainable manufacturing.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former tech executive who revolutionized our digital printing processes.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning designer with expertise in fashion and graphic design.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "David Thompson",
      role: "Operations Director",
      bio: "Logistics expert ensuring every order is delivered on time, every time.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ]

  const stats = [
    { icon: Users, label: "Happy Customers", value: "50,000+" },
    { icon: Trophy, label: "Products Delivered", value: "2M+" },
    { icon: Target, label: "Countries Served", value: "50+" },
    { icon: Calendar, label: "Years of Excellence", value: "9+" },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900/20 to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6">
            <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20">About ClothCore</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Crafting Stories Through
              <span className="text-orange-500"> Custom Apparel</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Since 2015, we've been transforming ideas into wearable art, helping businesses, organizations, and
              individuals express their unique identity through high-quality custom apparel.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-muted-foreground text-lg">
                ClothCore began with a simple belief: everyone deserves access to high-quality, custom apparel that
                tells their story. What started as a small operation in a garage has grown into one of the industry's
                most trusted names.
              </p>
              <p className="text-muted-foreground">
                Our founder, Sarah Johnson, noticed a gap in the market for affordable, high-quality custom printing
                services. With a background in textile manufacturing and a passion for innovation, she set out to create
                a company that would democratize custom apparel production.
              </p>
              <p className="text-muted-foreground">
                Today, we serve customers ranging from small startups to Fortune 500 companies, sports teams, schools,
                and individuals who want to make a statement. Our commitment to quality, sustainability, and customer
                service remains at the heart of everything we do.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="ClothCore Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Key milestones that shaped ClothCore into the company we are today.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              The passionate individuals behind ClothCore's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-orange-500 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Facility</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              We'd love to show you how we bring your ideas to life. Schedule a tour today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  1234 Industrial Blvd
                  <br />
                  Manufacturing District
                  <br />
                  Los Angeles, CA 90210
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Main: (555) 123-4567
                  <br />
                  Sales: (555) 123-4568
                  <br />
                  Support: (555) 123-4569
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  info@clothcore.com
                  <br />
                  sales@clothcore.com
                  <br />
                  support@clothcore.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Work With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Whether you need a single custom piece or thousands of items, we're here to help bring your vision to
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/support">
                <Button size="lg" variant="outline">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
