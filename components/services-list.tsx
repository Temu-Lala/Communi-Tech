"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "./language-provider"
import { Shield, FileCheck, Car, Wifi, Video, CreditCard, Building, BarChart } from "lucide-react"

export function ServicesList() {
  const { t } = useTranslation()

  const services = [
    {
      title: "Fraud Prevention Solutions",
      description: "Protect your business from fraud with our advanced security systems.",
      features: [
        "Real-time transaction monitoring",
        "Behavioral analytics",
        "Multi-factor authentication",
        "Secure payment processing",
      ],
      icon: Shield,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Smart Document Solutions",
      description: "Digitize and automate your document workflows for increased efficiency.",
      features: [
        "Document digitization",
        "Automated document processing",
        "Secure document storage",
        "Digital signatures",
      ],
      icon: FileCheck,
      color: "from-black to-gray-700 dark:from-gray-300 dark:to-white",
    },
    {
      title: "Smart Cheque Processing",
      description: "Streamline cheque processing with our intelligent scanning and verification system.",
      features: [
        "Automated cheque scanning",
        "Signature verification",
        "Fraud detection",
        "Integration with banking systems",
      ],
      icon: CreditCard,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Smart Parking Systems",
      description: "Optimize parking space utilization and improve user experience.",
      features: [
        "Automated entry/exit",
        "Real-time space availability",
        "Mobile payment integration",
        "Analytics and reporting",
      ],
      icon: Car,
      color: "from-blue-500 to-yellow-400",
    },
    {
      title: "Smart Boarding Solutions",
      description: "Streamline the boarding process for transportation and events.",
      features: [
        "Digital ticketing",
        "QR code scanning",
        "Passenger/attendee tracking",
        "Integration with existing systems",
      ],
      icon: Building,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "WiFi Follow Me",
      description: "Seamless WiFi connectivity that follows users across your premises.",
      features: [
        "Seamless handover between access points",
        "User authentication",
        "Bandwidth management",
        "Usage analytics",
      ],
      icon: Wifi,
      color: "from-yellow-400 to-black dark:from-yellow-400 dark:to-gray-300",
    },
    {
      title: "Smart Video Broadcast",
      description: "High-quality video broadcasting solutions for events and marketing.",
      features: [
        "Live streaming",
        "Video content management",
        "Analytics and engagement metrics",
        "Multi-platform distribution",
      ],
      icon: Video,
      color: "from-black to-blue-500 dark:from-gray-300 dark:to-blue-400",
    },
    {
      title: "Smart Index Solutions",
      description: "Intelligent data indexing and retrieval systems for improved information management.",
      features: [
        "Automated data categorization",
        "Fast search and retrieval",
        "Integration with existing databases",
        "Custom reporting",
      ],
      icon: BarChart,
      color: "from-red-500 to-red-700",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Complete Service Offerings</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of smart technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-3 overflow-hidden">
                  <div className={`absolute inset-0 w-full h-full bg-gradient-to-r ${service.color}`}></div>
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div
                      className={`w-full h-full rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
                          <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

