"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  const { t } = useTranslation()
  const [typedText, setTypedText] = useState("")
  const fullText = "COMMUNI TECH TECHNOLOGY PLC Inspired By Innovation, Empowered By Technology Solutions"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        // Reset the typing effect after a short delay
        setTimeout(() => {
          setTypedText("")
          currentIndex = 0
        }, 2000) // Delay before restarting
      }
    }, 100) // Typing speed (adjust as needed)

    return () => clearInterval(typingInterval)
  }, [fullText])

  const texts = [
    "AI",
    "ML",
    "Mobile",
    "Website",
    "Web Development",
    "Mobile Solution",
    "Cloud Services",
    "AI & Machine Learning",
    "Fraud Prevention",
    "Specialized Solutions",
    "System Development"
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 py-12 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url('https://img.freepik.com/free-vector/gradient-futuristic-cyber-background_23-2149116407.jpg?t=st=1742555621~exp=1742559221~hmac=4b6667a29130be89a49d74f0e37da1914f6e22f076be65310b507f0dd36f9b5c&w=1380')` }}
      />

      {/* Top Section: Text and Buttons */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Heading */}
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r text-blue-700 dark:text-cyan-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 100, delay: 100 }}
        >
          {t("heroTitle")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-700 dark:text-cyan-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {t("heroSubtitle")}
        </motion.p>

        {/* Typing Effect Text */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-sm md:text-base text-blue-700 dark:text-cyan-500">
            {typedText}
            <span className="animate-blink">|</span> {/* Blinking cursor */}
          </p>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white shadow-lg transform transition-transform hover:scale-105"
          >
            <Link href="/contact">{t("getStarted")}</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-blue-600 dark:text-yellow-400 border-blue-600 dark:border-yellow-400 hover:bg-blue-50 dark:hover:bg-gray-800 transform transition-transform hover:scale-105"
          >
            <Link href="/about">{t("learnMore")}</Link>
          </Button>
        </motion.div>
      </div>

      {/* Bottom Section: Collaboration Logos */}
      <motion.div
        className="container mx-auto px-4 mt-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 text-center mb-8">
          In Collaboration with
        </p>

        {/* Collaboration Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* Collaborator 1 */}
          <Link href="https://www.amricon.com" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:opacity-80"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://www.amricon.com/images/logo.png"
                alt="Amricon LLC Logo"
                className="h-12"
              />
              <span className="font-bold text-blue-600 dark:text-yellow-400 text-center">Amricon LLC</span>
            </motion.div>
          </Link>

          {/* Collaborator 2 */}
          <Link href="https://www.sunsmartglobal.com" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:opacity-80"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://www.sunsmartglobal.com/wp-content/uploads/2018/08/sunsmart-logo-black.png"
                alt="SUNSMART Logo"
                className="h-12"
              />
              <span className="font-bold text-blue-600 dark:text-yellow-400 text-center">SUNSMART</span>
            </motion.div>
          </Link>

          {/* Collaborator 3 */}
          <Link href="https://dalloltech.com" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:opacity-80"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://dalloltech.com/assets/website/images/logo/dalloltech_logo.png"
                alt="Dallol Tech Logo"
                className="h-12"
              />
              <span className="font-bold text-blue-600 dark:text-yellow-400 text-center">Dallol Tech</span>
            </motion.div>
          </Link>

          {/* Collaborator 4 */}
          <Link href="/" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:opacity-80"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/assets/photos/mericonlogo.jpg"
                alt="MERICON Logo"
                className="h-12"
              />
              <span className="font-bold text-blue-600 dark:text-yellow-400 text-center">MERICON CONSTRUCTION</span>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}