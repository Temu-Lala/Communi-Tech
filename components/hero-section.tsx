"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"
import Link from "next/link"
import { useEffect, useState } from "react"

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Typable Text and Buttons */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-yellow-500 dark:from-blue-400 dark:to-yellow-300">
            {t("heroTitle")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            {t("heroSubtitle")}
          </p>

          {/* Typing Effect Text */}
          <div className="mb-8">
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
              {typedText}
              <span className="animate-blink">|</span> {/* Blinking cursor */}
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white shadow-lg"
            >
              <Link href="/contact">{t("getStarted")}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-blue-600 dark:text-yellow-400 border-blue-600 dark:border-yellow-400 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              <Link href="/about">{t("learnMore")}</Link>
            </Button>
          </div>
        </div>

        {/* Right Side: Collaboration Logos */}
        <div className="md:w-1/2 flex flex-col items-center gap-8">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            In Collaboration with
          </p>

          {/* Collaboration Logos */}
          <div className="flex flex-col items-center gap-6">
            {/* Collaborator 1 */}
            <Link href="https://www.amricon.com" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <img
                  src="https://www.amricon.com/images/logo.png" // Replace with the actual path to the logo
                  alt="Amricon LLC Logo"
                  className="h-12"
                />
                <span className="font-bold text-blue-600 dark:text-yellow-400">Amricon LLC</span>
              </div>
            </Link>

            {/* Collaborator 2 */}
            <Link href="https://www.sunsmartglobal.com" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <img
                  src="https://www.sunsmartglobal.com/wp-content/uploads/2018/08/sunsmart-logo-black.png" // Replace with the actual path to the logo
                  alt="SUNSMART Logo"
                  className="h-12"
                />
                <span className="font-bold text-blue-600 dark:text-yellow-400">SUNSMART</span>
              </div>
            </Link>
            <Link href="https://dalloltech.com" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <img
                  src="https://dalloltech.com/assets/website/images/logo/dalloltech_logo.png" // Replace with the actual path to the logo
                  alt="SUNSMART Logo"
                  className="h-12"
                />
                <span className="font-bold text-blue-600 dark:text-yellow-400">Dallol Tech</span>
              </div>
            </Link>
            {/* Collaborator 3 */}
            <Link href="/" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col  sm:flex-row items-center gap-4 hover:opacity-80 transition-opacity">
  <img
    src="/assets/photos/mericonlogo.jpg" // Replace with the actual path to the logo
    alt="Future Labs Logo"
    className="h-12"
  />
  <span className="font-bold text-blue-600 dark:text-yellow-400">
    MERICON CONSTRUCTION
  </span>
</div>

            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}