"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "./language-provider"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ExecutiveTeam() {
  const { t } = useTranslation()

  const executives = [
    {
      name: "Dr. Dawit Mengistu",
      position: "Dept.of Electrical & Computer Engineering ",
      bio: "With over 20 years of experience in technology leadership, Dr. Tefera has led CommuniTech from a startup to a leading tech solutions provider. He holds a Ph.D. in Computer Science from MIT and has previously worked at global tech companies.",
      image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "samuel@communitech.com",
      },
    },
    {
      name: "Dr. Melak Mekonen",
      position: "Dept.of Electrical & Computer  Engineering at NASA ",
      bio: "A visionary technologist with expertise in AI and smart systems, Abebe leads our R&D and engineering teams to create innovative solutions. He has a Master's in Electrical Engineering from Stanford and has led multiple successful tech startups.",
      image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "abebe@communitech.com",
      },
    },
    {
      name: "Professor Samuel kinde ",
      position: "Dept.of Mechanical Engineering at Santiago University ",
      bio: "An operations expert with a background in supply chain management and business optimization. Hiwot has an MBA from Harvard Business School and has transformed our operational efficiency since joining in 2019.",
      image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "hiwot@communitech.com",
      },
    },
    {
      name: "Professor Abdelrahim Mohamed",
      position: "senior company adivisor",
      bio: "A seasoned financial expert with experience in technology investment and financial strategy for growing companies. Girma has a background in investment banking and holds an MBA from London Business School.",
      image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "girma@communitech.com",
      },
    },
  ]

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Consultants Team</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The visionaries guiding CommuniTech's strategic direction
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {executives.map((executive, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={executive.image || "/placeholder.svg"}
                  alt={executive.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a
                        href={executive.socialLinks.linkedin}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={executive.socialLinks.twitter}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-blue-400 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={`mailto:${executive.socialLinks.email}`}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-red-500 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-1">{executive.name}</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{executive.position}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-4">{executive.bio}</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/team/${executive.name.toLowerCase().replace(/\s+/g, "-")}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

