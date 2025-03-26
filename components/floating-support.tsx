"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"

export default function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-card rounded-lg shadow-lg mb-4 w-72 sm:w-80 overflow-hidden border"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                <h3 className="font-semibold">Chat Support</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8 text-white hover:bg-white/20">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 h-64 overflow-y-auto bg-background">
              <div className="flex flex-col space-y-4">
                <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                  <p className="text-sm">Hello! How can we help you today?</p>
                  <span className="text-xs text-muted-foreground mt-1 block">Support Team • Just now</span>
                </div>
              </div>
            </div>

            <div className="p-3 border-t flex items-center">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full p-2 bg-background border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button size="icon" className="ml-2 flex-shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-3 bg-muted/50 border-t">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/qr/5KVN6UGGXWF6O1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white text-sm py-2 px-3 rounded flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="https://t.me/Myilmex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white text-sm py-2 px-3 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}

