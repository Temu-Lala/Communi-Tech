"use client"

import { motion } from "framer-motion"
import { useTranslation } from "./language-provider"

export function ServiceHero() {
  const { t } = useTranslation()

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business operations and drive growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden"
        >
          <div className="aspect-video bg-muted">
            <img
              src="/placeholder.svg?height=500&width=1000&text=Smart+Technology+Solutions"
              alt="CommuniTech Services"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <div className="p-8 text-white max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Smart Solutions for Modern Businesses</h2>
              <p className="text-white/80">
                From fraud prevention to smart parking systems, our technology solutions are designed to address real
                business challenges and create new opportunities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

