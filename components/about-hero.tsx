"use client"

import { motion } from "framer-motion"
import { useTranslation } from "./language-provider"

export function AboutHero() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-black dark:from-blue-400 dark:to-yellow-300">
            About CommuniTech
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a leading technology solutions provider dedicated to transforming businesses through innovative smart
            technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted">
                <img
                  src="https://img.freepik.com/free-photo/employee-working-promotion_1156-560.jpg?t=st=1742115685~exp=1742119285~hmac=5a7b589580dabe7f5f161276ee15dc11bfd9cb475f30bdbbdcf29528715830c7&w=1060"
                  alt="CommuniTech Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-yellow-400/30 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">Our headquarters in Addis Ababa</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold flex items-center">
              <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">CT</span>
              </span>
              Our Story
            </h2>
            <p className="text-muted-foreground">
              Founded in 2022, CommuniTech began with a vision to bridge the technology gapCommuniTech is a dynamic and
 rapidly growing Smart
 Solutions company inspired by
 innovation and empowered by
 technology. Headquartered in
 the futuristic city of Addis Abab,
 CommuniTech is staffed by
 experienced professionals with
 over years combined
 experience.
            </p>
            <p className="text-muted-foreground">
            What CommuniTech does is simple.
 Wehelp organizations prevent
 fraud and reduce forgery using
 a range of SMART solutions
 tailored to suit your exact
 needs.
            </p>
            <p className="text-muted-foreground">
            But that's not all. Communi Tech is
 an innovator in many other
 fields of technology
 applications in addition to
 fraud prevention solutions,
 constantly coming up with
 exciting new inventions that
 are empowered by technology.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-muted rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

