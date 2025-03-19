"use client"

import { motion } from "framer-motion"
import { useTranslation } from "./language-provider"
import { ArrowRight } from "lucide-react"

export function SmartBusinessSection() {
  const { t } = useTranslation()

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
          <h2 className="text-3xl font-bold mb-4">Smart Business Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering businesses to work smarter, not harder
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Transform Your Business Operations</h3>
            <p className="text-muted-foreground mb-6">
              Our smart business solutions are designed to streamline operations, enhance security, and improve customer
              experiences across various industries.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Increased Efficiency</h4>
                  <p className="text-sm text-muted-foreground">
                    Automate routine tasks and streamline workflows to save time and resources.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Enhanced Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Protect your business and customer data with advanced security measures.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Improved Customer Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Deliver seamless, personalized experiences that keep customers coming back.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Data-Driven Insights</h4>
                  <p className="text-sm text-muted-foreground">
                    Make informed decisions based on real-time analytics and reporting.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&text=Smart+Business"
                alt="Smart Business Solutions"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-transparent mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

