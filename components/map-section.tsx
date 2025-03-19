"use client"

import { motion } from "framer-motion"

export function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
      <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md border">
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.3800001212497!2d38.75366925174247!3d9.011559907292439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855234891dad%3A0xaeb993c09217fc14!2zQW1oYXJhIEJhbmsgUy5DIEhRL-GLqOGKoOGIm-GIqyDhiaPhipXhiq0g4YqgLuGImyDhi4vhipMg4YiY4Yi14Yiq4Yur4Ymk4Ym1!5e1!3m2!1sen!2set!4v1741858287826!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{
                border: 0,
                animation: "blinkMap 1.5s infinite", // Apply blink effect to the map iframe
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
