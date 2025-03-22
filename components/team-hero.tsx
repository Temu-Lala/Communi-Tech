"use client"

import { motion } from "framer-motion"
import { useTranslation } from "./language-provider"
import Image from "next/image"

export function TeamHero() {
  const { t } = useTranslation()

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Meet the talented professionals behind CommuniTech's success. Our diverse team brings together expertise from
          various fields to deliver exceptional technology solutions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative rounded-xl overflow-hidden mb-16"
      >
        <div className="aspect-[21/9] bg-muted">
            <Image
                      src="/assets/photos/team.jpg"  
                      alt="CommuniTech Team"
                      className="w-full h-full object-cover"
                      width={1920}
                      height={1080} 
                    />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="p-8 text-white max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Innovators, Creators, Problem Solvers</h2>
            <p className="text-white/80">
              Our team is united by a passion for technology and a commitment to excellence in everything we do.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

