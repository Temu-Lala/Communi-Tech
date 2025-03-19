"use client"

import { motion } from "framer-motion"
import { useTranslation } from "./language-provider"
import { Lightbulb, Shield, Zap, Users, Star } from "lucide-react"

export function CompanyValues() {
  const { t } = useTranslation()

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible, seeking creative solutions to complex problems.",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical standards in all our business dealings.",
      color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Zap,
      title: "Excellence",
      description:
        "We strive for the highest quality in everything we do, from product development to customer service.",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    },
    {
      icon: Users,
      title: "Customer-Centricity",
      description: "We put our clients' needs at the center of our decision-making process.",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    },
    {
      icon: Star,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships to achieve greater results.",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    },
  ]

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our work and define our culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full ${value.color} flex items-center justify-center mb-4`}>
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

