"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "./language-provider"
import { Linkedin, Twitter, Mail } from "lucide-react"

export function TeamSection() {
  const { t } = useTranslation()

  const executives = [
    {
      name: "Meron Yilma",
      position: "CEO",
      bio: "Mrs.Meron Yilma– holds an MSc degree in Biotechnology and Bioinformatics from Osmania University and attended computer Science course in Mekelle University and HilCoe computer Science College, Addis Ababa",
      image: "/assets/photos/meron.png",
    },
    {
      name: "Yilma Mengistu",
      position: "Admin & HR Manager",
      bio: "A visionary technologist with expertise in AI and smart systems, leading our R&D and engineering teams to create innovative solutions.",
      image: "/assets/photos/gashylma.png",
    },
    {
      name: "Ezra Yilma",
      position: "Deputy General Manager",
      bio: "An operations expert with a background in supply chain management and business optimization.",
      image: "/assets/photos/ezra.jpg",
    },
    {
      name: "Darik Sintayehu",
      position: "Chief Financial Officer",
      bio: "A seasoned financial expert with experience in technology investment and financial strategy for growing companies.",
      image: "/assets/photos/darick.jpg",
    },
  ]



  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the experts behind CommuniTech's success
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Executive Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((executive, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={executive.image || "/placeholder.svg"}
                      alt={executive.name}
                      className="w-full h- object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-1">{executive.name}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{executive.position}</p>
                    <p className="text-muted-foreground text-sm mb-4">{executive.bio}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  )
}

