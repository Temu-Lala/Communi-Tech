"use client"; // Ensure this is a client component

import { motion } from "framer-motion"; // Import motion from framer-motion
import Image from "next/image"; // Import Image from next/image
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { MapSection } from "@/components/map-section";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      {/* Hero Section with Motion and Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative rounded-xl overflow-hidden mb-16"
      >
        <div className="aspect-[21/9] bg-muted">
          <Image
            src="/assets/photos/contactus.jpg" // Ensure this image exists in the public directory
            alt="CommuniTech Team"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="p-8 text-white max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-white/80">
            Have questions about our services or want to discuss a project? Reach out to us using any of the methods below.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Info and Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>

      {/* Map Section */}
      <MapSection />
    </div>
  );
}