"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useCursor } from "@/components/cursor-provider"

interface SolutionItemProps {
  id: string
  title: string
  description: string
  imageSrc: string
}

const solutionsSample: SolutionItemProps[] = [
  {
    id: "smart-document",
    title: "SMART Document",
    description: "Secure document management with advanced authentication features.",
    imageSrc: "https://img.freepik.com/free-vector/hand-drawn-credit-assessment-concept-with-documents_23-2149154259.jpg?t=st=1741860644~exp=1741864244~hmac=22c5cd26d2c7bef0a92a585532d2895cb4f574af89c5d550a6ba630a2c4e0222&w=900",
  },
  {
    id: "smart-cheque",
    title: "Smart Cheque ",
    description: "Fraud-resistant cheque solution with multi-layer security.",
    imageSrc: "https://img.freepik.com/free-vector/gradient-blank-check-template_23-2148974830.jpg?t=st=1741866473~exp=1741870073~hmac=0e80c9590dc715faee7d4d227fb27ab70c07d92d14cb635012dc521831d12aec&w=1480",
  },
  {
    id: "smart-parking",
    title: "Smart Parking ",
    description: "Intelligent parking management system with RFID technology",
    imageSrc: "https://img.freepik.com/free-vector/smart-parking-man-user-with-smartphone-touch-screen-control-car-driving-park_33099-165.jpg?t=st=1741867071~exp=1741870671~hmac=c6f81363c5cfb0c8883c58a1cf2bd192d94b91d05e843354cbb4627a397c3056&w=826",
  },
]

export default function SolutionShowcase() {
  const { setIsHovering } = useCursor()

  return (
    <section className="space-y-12 py-16">
      {/* Heading with dark mode and light mode text */}
      <h2 className="text-4xl font-bold text-center mb-10 text-black dark:text-white">
        Our Solutions
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-12">
        {solutionsSample.map((solution) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/50 to-black/50 backdrop-blur-sm border border-white/10"
          >
            <div className="h-[250px] relative">
              <Image
                src={solution.imageSrc}
                alt={solution.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="p-6 space-y-4">
              {/* Card title with dynamic color */}
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {solution.title}
              </h3>
              {/* Card description with dynamic color */}
              <p className="text-gray-700 dark:text-white/70">{solution.description}</p>
              <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Button asChild className="rounded-full px-6 group bg-blue-600 hover:bg-blue-700">
                  <Link href={`/solutions#${solution.id}`} className="flex items-center">
                    Explore Solution
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button with gradient and dynamic text color */}
      <div className="flex justify-center mt-12">
        <Button
          asChild
          className="rounded-full px-10 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600"
        >
          <Link href="/solutions" className="flex items-center text-lg text-white">
            See All Solutions
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
