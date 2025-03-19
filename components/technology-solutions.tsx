"use client"

import { motion } from "framer-motion"
import { useTranslation } from "./language-provider"
import { Network, Server, Database, Lock, Globe } from "lucide-react"

export function TechnologySolutions() {
  const { t } = useTranslation()

  const solutions = [
    {
      title: "Network & Internet Connectivity",
      description: "Reliable, high-speed connectivity solutions for businesses of all sizes.",
      icon: Network,
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions to support your growing business needs.",
      icon: Server,
    },
    {
      title: "Data Management",
      description: "Comprehensive data storage, processing, and analytics solutions.",
      icon: Database,
    },
    {
      title: "Cybersecurity",
      description: "Advanced security measures to protect your business from threats.",
      icon: Lock,
    },
    {
      title: "Web & Mobile Solutions",
      description: "Custom web and mobile applications tailored to your business requirements.",
      icon: Globe,
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
          <h2 className="text-3xl font-bold mb-4">Technology Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Core technology services that power our smart solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

