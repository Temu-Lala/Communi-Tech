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
      { name: "Kidist Abebe", role: "Senior Software Engineer", image: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1742407749~exp=1742411349~hmac=3cfe40f60ddae7404f63dd2291350aa3b9c858adb8e107b5009cd3c69f0a86c4&w=826" },
      { name: "Tewodros Hailu", role: "Frontend Developer", image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" },
      { name: "Rahel Girma", role: "Backend Developer", image: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1742407749~exp=1742411349~hmac=3cfe40f60ddae7404f63dd2291350aa3b9c858adb8e107b5009cd3c69f0a86c4&w=826" },
      { name: "Yohannes Tadesse", role: "DevOps Engineer", image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" },
      { name: "Bethlehem Alemu", role: "UI/UX Designer", image: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1742407749~exp=1742411349~hmac=3cfe40f60ddae7404f63dd2291350aa3b9c858adb8e107b5009cd3c69f0a86c4&w=826" },
      { name: "Eyob Mekonnen", role: "Data Scientist", image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" },
    ],
    operations: [
      { name: "Selamawit Bekele", role: "Project Manager", image: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1742407749~exp=1742411349~hmac=3cfe40f60ddae7404f63dd2291350aa3b9c858adb8e107b5009cd3c69f0a86c4&w=826" },
      { name: "Henok Assefa", role: "Quality Assurance", image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" },
      { name: "Tigist Haile", role: "Customer Support Lead", image: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1742407749~exp=1742411349~hmac=3cfe40f60ddae7404f63dd2291350aa3b9c858adb8e107b5009cd3c69f0a86c4&w=826" },
      { name: "Dawit Mengistu", role: "Technical Support", image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" },
      { name: "Hanna Tesfaye", role: "Operations Analyst", image: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1742407749~exp=1742411349~hmac=3cfe40f60ddae7404f63dd2291350aa3b9c858adb8e107b5009cd3c69f0a86c4&w=826" },
    ],
    finance: [
      { name: "Abebe Kebede", role: "Financial Analyst", image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" },
      { name: "Meron Tadesse", role: "Accountant", image: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1742407749~exp=1742411349~hmac=3cfe40f60ddae7404f63dd2291350aa3b9c858adb8e107b5009cd3c69f0a86c4&w=826" },
      { name: "Yonas Haile", role: "Compliance Officer", image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" },
      { name: "Tigist Alemu", role: "Procurement Specialist", image: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1742407749~exp=1742411349~hmac=3cfe40f60ddae7404f63dd2291350aa3b9c858adb8e107b5009cd3c69f0a86c4&w=826" },
    ],
    marketing: [
      { name: "Biruk Tadesse", role: "Marketing Specialist", image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" },
      { name: "Sara Girma", role: "Content Creator", image: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1742407749~exp=1742411349~hmac=3cfe40f60ddae7404f63dd2291350aa3b9c858adb8e107b5009cd3c69f0a86c4&w=826" },
      { name: "Abiy Mekonnen", role: "Social Media Manager", image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" },
      { name: "Hiwot Bekele", role: "Business Development", image: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1742407749~exp=1742411349~hmac=3cfe40f60ddae7404f63dd2291350aa3b9c858adb8e107b5009cd3c69f0a86c4&w=826" },
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

