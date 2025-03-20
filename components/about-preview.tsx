"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutPreview() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-yellow-500 mb-8">
              {t("aboutUs")}
            </h2>
            <div className="space-y-8">
              {/* Vision Card */}
              <motion.div
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{t("vision")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the leading provider of innovative technology solutions that transfors businesses and enhabces
                  lives across Africa and beyond.
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3">{t("mission")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We deliver cutting-edge technology solutions that empower businesses to work smarter, connect better,
                  and achieve more through innovation and excellence.
                </p>
              </motion.div>

              {/* Values Card */}
              <motion.div
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{t("values")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Innovation, Integrity, Excellence, Customer-Centricity, and Collaboration drive everything we do at
                  CommuniTech.
                </p>
              </motion.div>
            </div>

            {/* Learn More Button */}
            <Button className="mt-8 group" variant="outline" asChild>
              <Link href="/about" className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                  Learn More
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Section: Stats Grid */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Years Experience */}
              <motion.div
                className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg text-white text-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold">2+</div>
                <div className="text-sm mt-2">Years Experience</div>
              </motion.div>

              {/* Clients Served */}
              <motion.div
                className="p-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl shadow-lg text-white text-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold">110+</div>
                <div className="text-sm mt-2">Clients Served</div>
              </motion.div>

              {/* Team Members */}
              <motion.div
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg text-white text-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold">20+</div>
                <div className="text-sm mt-2">Team Members</div>
              </motion.div>

              {/* Smart Solutions */}
              <motion.div
                className="p-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg text-white text-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold">15+</div>
                <div className="text-sm mt-2">Smart Solutions</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}