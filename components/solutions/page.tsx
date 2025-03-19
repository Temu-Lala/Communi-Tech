"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GradientText } from "@/components/gradient-text"
import { useCursor } from "@/components/cursor-provider"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function SolutionsPage() {
  const { setIsHovering } = useCursor()

  const solutionCategories = ["All", "SMART Documents", "Fraud Prevention", "RFID Solutions", "Connectivity"]

  const solutions = [
    {
      id: "smart-document",
      title: "SMART Document",
      description: "Secure document management with advanced authentication features.",
      features: [
        "Multi-layer security features",
        "Tamper-evident technology",
        "Digital authentication capabilities",
        "Integration with existing systems",
        "Customizable security levels",
      ],
      category: "SMART Documents",
      icon: "📄",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "smart-cheque",
      title: "SMART Cheque",
      description: "Fraud-resistant cheque solution with multi-layer security.",
      features: [
        "Advanced anti-counterfeiting features",
        "Real-time verification capabilities",
        "Integration with banking systems",
        "Audit trail and tracking",
        "Customizable security elements",
      ],
      category: "SMART Documents",
      icon: "💰",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "smart-boarding",
      title: "SMART Boarding Pass",
      description: "Secure boarding pass system with enhanced verification features.",
      features: [
        "Tamper-proof design",
        "Real-time passenger verification",
        "Integration with airline systems",
        "Streamlined boarding process",
        "Enhanced security protocols",
      ],
      category: "SMART Documents",
      icon: "✈️",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "fraud-prevention",
      title: "Fraud Prevention",
      description: "Comprehensive solutions to detect and prevent fraudulent activities.",
      features: [
        "Advanced fraud detection algorithms",
        "Real-time monitoring and alerts",
        "Behavioral analysis",
        "Integration with existing security systems",
        "Customizable security protocols",
      ],
      category: "Fraud Prevention",
      icon: "🔒",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "rfid-solutions",
      title: "RFID Solutions",
      description: "Advanced RFID technology for tracking and security applications.",
      features: [
        "Asset tracking and management",
        "Access control systems",
        "Inventory management",
        "Supply chain visibility",
        "Custom RFID tag development",
      ],
      category: "RFID Solutions",
      icon: "📡",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "smart-parking",
      title: "SMART Parking",
      description: "Intelligent parking management system with RFID technology.",
      features: [
        "Automated entry and exit",
        "Real-time space availability",
        "Integrated payment systems",
        "Analytics and reporting",
        "Enhanced security features",
      ],
      category: "RFID Solutions",
      icon: "🚗",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "wifi-follow-me",
      title: "Wi-Fi Follow Me",
      description: "Seamless Wi-Fi connectivity that follows users throughout facilities.",
      features: [
        "Continuous connectivity across locations",
        "Automatic network switching",
        "Enhanced security protocols",
        "User analytics and insights",
        "Customizable deployment options",
      ],
      category: "Connectivity",
      icon: "📶",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "smart-video-broadcast",
      title: "SMART Video Broadcast",
      description: "Advanced video broadcasting solution with enhanced security.",
      features: [
        "Secure content delivery",
        "High-quality streaming",
        "Access control and authentication",
        "Analytics and viewer insights",
        "Customizable deployment options",
      ],
      category: "Connectivity",
      icon: "📹",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our <GradientText className="bg-gradient-to-r from-blue-400 to-yellow-400">SMART Solutions</GradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/80 mb-8"
            >
              Patented technology solutions for enhanced security, fraud prevention, and operational efficiency
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-24 bg-gradient-to-b from-black to-blue-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Patented SMART Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/70"
            >
              Our experts have created innovative SMART solutions to address critical security and operational
              challenges
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.slice(0, 4).map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all hover:border-white/20 hover:bg-white/10"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{solution.title}</h3>
                <p className="mb-4 text-white/70">{solution.description}</p>
                <Link href={`#${solution.id}`} className="flex items-center text-blue-400 group">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-24 bg-blue-950" id="solutions-detail">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Explore Our Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Discover our comprehensive range of SMART technology solutions designed to meet your specific business
              needs
            </motion.p>
          </div>

          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-12">
              {solutionCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {solutionCategories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {solutions
                    .filter((solution) => category === "All" || solution.category === category)
                    .map((solution) => (
                      <motion.div
                        key={solution.id}
                        id={solution.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                      >
                        <div className="relative h-[200px]">
                          <Image
                            src={solution.image || "/placeholder.svg"}
                            alt={solution.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-white/70 mb-6">{solution.description}</p>
                          <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                          <div className="space-y-3 mb-6">
                            {solution.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-white/70">{feature}</p>
                              </div>
                            ))}
                          </div>
                          <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                            <Button asChild className="rounded-full px-8 bg-blue-600 hover:bg-blue-700">
                              <Link href="/contact">Request Information</Link>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-gradient-to-b from-blue-950 to-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Our Implementation Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              A structured approach that ensures successful delivery of your SMART technology solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="pt-16 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Assessment</h3>
                <p className="text-white/70">
                  We analyze your security requirements, challenges, and goals to develop a comprehensive understanding
                  of your needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="pt-16 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Solution Design</h3>
                <p className="text-white/70">
                  Our team creates a customized solution design, technical specifications, and implementation plan.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="pt-16 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Implementation</h3>
                <p className="text-white/70">
                  Our expert team implements your solution with minimal disruption to your operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="pt-16 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Support & Optimization</h3>
                <p className="text-white/70">
                  We provide ongoing support, monitoring, and optimization to ensure your solution continues to perform
                  optimally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-12"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] bg-yellow-400/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[100px]" />
              </div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Implement SMART Solutions?</h2>
              <p className="text-white/80 text-lg mb-8">
                Contact us today to discuss how our SMART technology solutions can help secure your business and improve
                operational efficiency.
              </p>
              <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

