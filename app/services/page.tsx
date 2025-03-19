import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications tailored to your specific needs",
      features: [
        "Responsive design that works on all devices",
        "Custom web applications with modern frameworks",
        "E-commerce solutions with secure payment processing",
        "Content management systems for easy updates",
        "Performance optimization and SEO-friendly architecture",
      ],
      icon: "💻",
      image: "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?t=st=1742293436~exp=1742297036~hmac=1598d7891dd5a311be05b4e64e6ecd2837bd540acd8aefb1a6f9193d29526c20&w=1380",
    },
    
    {
      id: "mobile-solutions",
      title: "Mobile Solutions",
      description: "Cross-platform and native mobile applications for iOS and Android",
      features: [
        "Native iOS and Android applications",
        "Cross-platform solutions with React Native and Flutter",
        "Progressive Web Apps (PWAs)",
        "App Store optimization and submission assistance",
        "Ongoing maintenance and support",
      ],
      icon: "📱",
      image: "https://img.freepik.com/free-vector/mobile-apps-concept-landing-page_52683-22745.jpg?t=st=1742293384~exp=1742296984~hmac=31cf7589b4fcba37f475e36baa1532f716c0b8cff9da4bfeb0e71c1bc11c10a6&w=1380",
    },
    {
      id: "cloud-services",
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services",
      features: [
        "Cloud architecture design and implementation",
        "Migration to AWS, Azure, or Google Cloud",
        "Serverless application development",
        "Managed DevOps services",
        "Continuous integration and deployment pipelines",
      ],
      icon: "☁️",
      image: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?t=st=1742293068~exp=1742296668~hmac=b090b3b67fe581be6e6c792f2cdc1bbda72c561bbd89fcff96d58871a3f11f3f&w=1380",
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence",
      features: [
        "Predictive analytics and data modeling",
        "Natural language processing applications",
        "Computer vision solutions",
        "Recommendation systems",
        "AI integration with existing systems",
      ],
      icon: "🤖",
      image: "https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-robotic-hand-machine-learning-cyber-mind-domination-concept_127544-852.jpg?t=st=1742293306~exp=1742296906~hmac=ce1397d4d0d104ec7b7b727cdb6a99c68e13549ae604037d4b274a99ee4d70e5&w=1380",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services & Solutions</h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation in a digital
              world.
            </p>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0C240 37.0566 480 55.5849 720 55.5849C960 55.5849 1200 37.0566 1440 0V74H0V0Z"
              fill="currentColor"
              className="text-background"
            />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="p-0 h-auto font-semibold">
                    <Link href={`#${service.id}`} className="flex items-center gap-1 text-primary">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Tabs */}
      <section className="py-24 bg-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Solutions in Detail</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of technology solutions designed to meet your specific business needs.
            </p>
          </div>

          <Tabs defaultValue="web-development" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id}>
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} id={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild>
                      <Link href="/contact">
                        Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures successful delivery of your technology projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div className="pt-12 p-6 border rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-muted-foreground">
                  We analyze your requirements, challenges, and goals to develop a comprehensive understanding of your
                  project.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div className="pt-12 p-6 border rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Planning</h3>
                <p className="text-muted-foreground">
                  Our team creates detailed project plans, technical specifications, and timelines for seamless
                  execution.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div className="pt-12 p-6 border rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Our expert developers build your solution using agile methodologies and regular progress updates.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div className="pt-12 p-6 border rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Delivery & Support</h3>
                <p className="text-muted-foreground">
                  We thoroughly test, deploy, and provide ongoing support to ensure your solution continues to perform
                  optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Bring Your Ideas to Life</h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact us today to discuss how our technology solutions can help your business thrive in the digital era.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

