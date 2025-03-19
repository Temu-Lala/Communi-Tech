"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa" // Import arrow icons

export function CollaborationsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false) // Track modal state
  const [selectedImage, setSelectedImage] = useState<string>("") // Track selected image for modal

  const companies = [
    {
      name: "SUNSMART.",
      logo: "https://www.sunsmartglobal.com/wp-content/uploads/2018/08/sunsmart-logo-black.png",
      description: "Leading the way in technological advancements and innovative solutions.",
      socialLinks: {
        twitter: "https://twitter.com/techinnovators",
        linkedin: "https://linkedin.com/company/tech-innovators",
        website: "https://techinnovators.com"
      },
      websiteLink: "https://www.sunsmartglobal.com" // Link to Sunsmart's website
    },
    {
      name: "AMRICON",
      logo: "https://www.amricon.com/images/logo.png",
      description: "Dedicated to creating sustainable and eco-friendly technology solutions.",
      socialLinks: {
        twitter: "https://www.amricon.com",
        linkedin: "https://www.amricon.com",
        website: "https://www.amricon.com"
      },
      websiteLink: "https://www.amricon.com" // Link to Amricon's website
    },
    {
      name: "Dalloltech",
      logo: "https://dalloltech.com/assets/website/images/logo/dalloltech_logo.png",
      description: "Dallol Tech is a leading Ethiopian technology company with a global vision dedicated to driving positive change. Our name, derived from the Afar language, symbolizes our commitment to breaking down barriers and creating innovative solutions.",
      socialLinks: {
        twitter: "https://dalloltech.com",
        linkedin: "https://dalloltech.com",
        website: "https://dalloltech.com"
      },
      websiteLink: "https://dalloltech.com" // Link to Dalloltech's website
    },
    {
      name: "MERICON CONSTRUCTION ",
      logo: "/assets/photos/mericonlogo.jpg",
      description: "Mericon construction was established as private construction firm in April 23, 1997 in Addis Ababa.",
      socialLinks: {
        twitter: "https://mericonconstruction.com",
        linkedin: "https://mericonconstruction.com",
        website: "https://mericonconstruction.com"
      },
      websiteLink: "https://mericonconstruction.com" // Link to Mericon Construction's website
    }
  ]

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage("")
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-yellow-500 mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional solutions
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-80"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <a href={company.websiteLink} target="_blank" rel="noopener noreferrer" className="text-center">
                <img src={company.logo} alt={company.name} className="max-h-16 self-center mb-4" />
                <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                <p className="text-sm text-center mb-4 text-gray-600 dark:text-gray-300">{company.description}</p>
              </a>
              <div className="flex gap-4">
                <a href={company.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">
                  Twitter
                </a>
                <a href={company.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">
                  LinkedIn
                </a>
                <a href={company.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">
                  Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Large Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full p-6 overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Agreement Letter"
              className="w-full h-auto rounded-lg"
              style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </section>
  )
}