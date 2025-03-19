"use client"

import { motion } from "framer-motion"
import { useTranslation } from "./language-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TeamMembers() {
  const { t } = useTranslation()

  const teamMembers = {
    technology: [
      { name: "Kidist Abebe", role: "Senior Software Engineer", image: "/placeholder.svg?height=100&width=100" },
      { name: "Tewodros Hailu", role: "Frontend Developer", image: "/placeholder.svg?height=100&width=100" },
      { name: "Rahel Girma", role: "Backend Developer", image: "/placeholder.svg?height=100&width=100" },
      { name: "Yohannes Tadesse", role: "DevOps Engineer", image: "/placeholder.svg?height=100&width=100" },
      { name: "Bethlehem Alemu", role: "UI/UX Designer", image: "/placeholder.svg?height=100&width=100" },
      { name: "Eyob Mekonnen", role: "Data Scientist", image: "/placeholder.svg?height=100&width=100" },
    ],
    operations: [
      { name: "Selamawit Bekele", role: "Project Manager", image: "/placeholder.svg?height=100&width=100" },
      { name: "Henok Assefa", role: "Quality Assurance", image: "/placeholder.svg?height=100&width=100" },
      { name: "Tigist Haile", role: "Customer Support Lead", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dawit Mengistu", role: "Technical Support", image: "/placeholder.svg?height=100&width=100" },
      { name: "Hanna Tesfaye", role: "Operations Analyst", image: "/placeholder.svg?height=100&width=100" },
    ],
    finance: [
      { name: "Abebe Kebede", role: "Financial Analyst", image: "/placeholder.svg?height=100&width=100" },
      { name: "Meron Tadesse", role: "Accountant", image: "/placeholder.svg?height=100&width=100" },
      { name: "Yonas Haile", role: "Compliance Officer", image: "/placeholder.svg?height=100&width=100" },
      { name: "Tigist Alemu", role: "Procurement Specialist", image: "/placeholder.svg?height=100&width=100" },
    ],
    marketing: [
      { name: "Biruk Tadesse", role: "Marketing Specialist", image: "/placeholder.svg?height=100&width=100" },
      { name: "Sara Girma", role: "Content Creator", image: "/placeholder.svg?height=100&width=100" },
      { name: "Abiy Mekonnen", role: "Social Media Manager", image: "/placeholder.svg?height=100&width=100" },
      { name: "Hiwot Bekele", role: "Business Development", image: "/placeholder.svg?height=100&width=100" },
    ],
  }

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Our Team Members</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The talented professionals who make our vision a reality
        </p>
      </motion.div>

      <Tabs defaultValue="technology" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>
        </div>

        {Object.entries(teamMembers).map(([department, members]) => (
          <TabsContent key={department} value={department} className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-3">
                    <Avatar className="w-24 h-24 border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge variant="secondary" className="text-xs bg-primary text-white">
                        {department.charAt(0).toUpperCase() + department.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <h4 className="font-medium text-base">{member.name}</h4>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

