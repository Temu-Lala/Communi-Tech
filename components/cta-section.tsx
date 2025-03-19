"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 container mx-auto px-4">
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-yellow-400 opacity-90" />

        <div className="relative z-10 py-16 px-8 md:px-16 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Smart Technology?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Contact us today to discuss how our solutions can help you achieve your business goals.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
      </motion.div>
    </section>
  )
}

