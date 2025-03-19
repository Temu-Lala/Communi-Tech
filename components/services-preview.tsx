"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"
import Link from "next/link"
import { ArrowRight, Shield, Network, FileCheck, Car, Wifi, Video, Bot } from "lucide-react"

export function ServicesPreview() {
  const { t } = useTranslation()

  const services = [
    {
      title: "Fraud Prevention Solutions",
      description: "Advanced security systems to protect your business from fraud and cyber threats.",
      icon: Shield,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Network & Internet Connectivity",
      description: "Reliable, high-speed connectivity solutions for businesses of all sizes.",
      icon: Network,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Smart Document Solutions",
      description: "Digitize and automate your document workflows for increased efficiency.",
      icon: FileCheck,
      color: "from-black to-gray-700 dark:from-gray-300 dark:to-white",
    },
    {
      title: "Smart Parking Systems",
      description: "Automated parking solutions to optimize space utilization and improve user experience.",
      icon: Car,
      color: "from-blue-500 to-yellow-400",
    },
    {
      title: "WiFi Follow Me",
      description: "Seamless WiFi connectivity that follows users across your premises.",
      icon: Wifi,
      color: "from-yellow-400 to-black dark:from-yellow-400 dark:to-gray-300",
    },
    {
      title: "Herbie Bot ",
      description: "AI Powered Chatbot with Human Touch",
      icon: Bot,
      color: "from-black to-blue-500 dark:from-gray-300 dark:to-blue-400",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourServices")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("smartSolutions")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br text-white">
                    <div
                      className={`w-full h-full rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 group-hover:underline text-sm text-primary flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services" className="flex items-center gap-2">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

