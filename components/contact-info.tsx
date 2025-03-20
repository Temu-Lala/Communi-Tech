"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { FaWhatsapp, FaTelegram } from "react-icons/fa"  // Import WhatsApp and Telegram icons

export function ContactInfo() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Address",
      content: "Addis Ababa, Ethiopia , Legehar Ameld Bulding, 2nd Floor Off No 220",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+251 911 215 340 / +251 118 304 346 / +971 559 690 130",
    },
    {
      icon: Mail,
      title: "Email",
      content: "yilmanovich@gmail.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Friday: 8:00 AM - 6:00 PM",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          Have questions about our services or want to discuss a project? Reach out to us using any of the methods
          below.
        </p>
      </div>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start"
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
              <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-muted-foreground">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-6 border-t">
        <h3 className="font-medium mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          {/* Social Media Icons */}
          <motion.a
            href="#facebook"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all"
          >
            <span className="sr-only">Facebook</span>
            <Facebook className="h-5 w-5" />
          </motion.a>
          
          <motion.a
            href="#twitter"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </motion.a>
          
          <motion.a
            href="#linkedin"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-all"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/communitechtechnology?igsh=YzljYTk1ODg3Zg=="
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-pink-500 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-all"
          >
            <span className="sr-only">Instagram</span>
            <Instagram className="h-5 w-5" />
          </motion.a>

          {/* Add Telegram */}
          <motion.a
            href="#telegram"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all"
          >
            <span className="sr-only">Telegram</span>
            <FaTelegram className="h-5 w-5" />
          </motion.a>

          {/* Add WhatsApp */}
          <motion.a
            href="#whatsapp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all"
          >
            <span className="sr-only">WhatsApp</span>
            <FaWhatsapp className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
