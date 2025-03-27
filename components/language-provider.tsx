"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "am"

type Translations = {
  [key: string]: {
    en: string
    am: string
  }
}

// Define translations
const translations: Translations = {
  // Navbar
  home: { en: "Home", am: "መነሻ" },
  about: { en: "About Us", am: "ስለ እኛ" },
  solutions: { en: "Solutions", am: "መፍትሄ" },
  services: { en: "Services", am: "አገልግሎቶች" },
  contact: { en: "Contact", am: "ያግኙን" },
  blog: { en: "blog", am: "blog" },
  // Hero Section
  heroTitle: {
    en: "COMMUNI TECH TECHNOLOGY PLC ",
    am: "ፈጠራዊ የቴክኖሎጂ መፍትሄዎች",
  },
  heroSubtitle: {
    en: "Transforming businesses with smart technology",
    am: "ንግዶችን በዘመናዊ ቴክኖሎጂ መቀየር",
  },
  getStarted: { en: "Get Started", am: "ይጀምሩ" },
  learnMore: { en: "Learn More", am: "ተጨማሪ ይወቁ" },

  // About Section
  aboutUs: { en: "About Us", am: "ስለ እኛ" },
  vision: { en: "Vision", am: "ራዕይ" },
  mission: { en: "Mission", am: "ተልዕኮ" },
  values: { en: "Values", am: "እሴቶች" },

  // Services
  ourServices: { en: "Our Services", am: "አገልግሎቶቻችን" },
  smartSolutions: { en: "Smart Solutions", am: "ዘመናዊ መፍትሄዎች" },

  // Contact
  contactUs: { en: "Contact Us", am: "ያግኙን" },
  name: { en: "Name", am: "ስም" },
  email: { en: "Email", am: "ኢሜይል" },
  message: { en: "Message", am: "መልዕክት" },
  send: { en: "Send", am: "ላክ" },

  // Footer
  allRightsReserved: {
    en: "All Rights Reserved",
    am: "መብቱ በህግ የተጠበቀ ነው",
  },

  // Add to translations
  team: { en: "Team", am: "ቡድን" },

  // Add more translations as needed
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}

