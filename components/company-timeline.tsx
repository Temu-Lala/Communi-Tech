"use client"

import { motion } from "framer-motion"
import { useTranslation } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CompanyTimeline() {
  const { t } = useTranslation()

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description:
        "CommuniTech was established with a vision to transform businesses through innovative technology solutions.",
      icon: "🚀",
      color: "border-blue-500",
    },
    {
      year: "2022",
      title: "First Major Client",
      description: "Secured our first enterprise client and launched our  fraud prevention solution.",
      icon: "🏆",
      color: "border-yellow-400",
    },
    {
      year: "2023",
      title: "Expansion of Services",
      description: "Expanded our portfolio to include smart document solutions and network connectivity services.",
      icon: "📈",
      color: "border-green-500",
    },
    {
      year: "2023",
      title: "New Headquarters",
      description: "Moved to our current headquarters in Addis Ababa and doubled our team size.",
      icon: "🏢",
      color: "border-purple-500",
    },
    {
      year: "2024",
      title: "International Expansion",
      description:
        "Expanded operations to neighboring countries and formed strategic partnerships with global tech companies.",
      icon: "🌍",
      color: "border-orange-500",
    },
    {
      year: "2024",
      title: "Innovation Award",
      description: "Received the National Innovation Award for our Smart Parking System implementation.",
      icon: "🏅",
      color: "border-red-500",
    },
    {
      year: "2025",
      title: "AI Integration",
      description: "Integrated advanced AI capabilities across our product portfolio, enhancing our smart solutions.",
      icon: "🤖",
      color: "border-indigo-500",
    },
    {
      year: "2030",
      title: "Future Vision",
      description: "Continuing our mission to innovate and transform businesses across Africa and beyond.",
      icon: "✨",
      color: "border-teal-500",
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
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From our founding in 2022 to the present day, explore the key milestones in CommuniTech's growth
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-yellow-400 to-teal-500"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? "md:ml-auto md:mr-[50%] md:pr-12" : "md:mr-auto md:ml-[50%] md:pl-12"}`}
              style={{ width: "calc(50% - 20px)" }}
            >
              <Card className={`border-l-4 ${milestone.color} hover:shadow-md transition-all`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{milestone.icon}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg">{milestone.title}</h3>
                        <Badge variant="outline" className="bg-primary/10">
                          {milestone.year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline dot */}
              <div className="absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background">
                <div className="absolute inset-0 rounded-full animate-ping bg-primary opacity-20"></div>
                {index % 2 === 0 ? (
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-10 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                ) : (
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-10 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

