"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "./language-provider"
import { Linkedin, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function DepartmentHeads() {
  const { t } = useTranslation()

  const departmentHeads = [
    {
      name: "Tigist Mengesha",
      position: "Head of R&D",
      department: "Technology",
      expertise: ["Artificial Intelligence", "Machine Learning", "Research"],
      image: "/placeholder.svg?height=300&width=300",
      joined: "2019",
    },
    {
      name: "Dawit Gebre",
      position: "Head of Engineering",
      department: "Technology",
      expertise: ["Software Architecture", "Cloud Infrastructure", "DevOps"],
      image: "/placeholder.svg?height=300&width=300",
      joined: "2018",
    },
    {
      name: "Yonas Bekele",
      position: "Head of Operations",
      department: "Operations",
      expertise: ["Process Optimization", "Supply Chain", "Quality Assurance"],
      image: "/placeholder.svg?height=300&width=300",
      joined: "2020",
    },
    {
      name: "Meron Alemu",
      position: "Head of Logistics",
      department: "Operations",
      expertise: ["Supply Chain", "Inventory Management", "Distribution"],
      image: "/placeholder.svg?height=300&width=300",
      joined: "2019",
    },
    {
      name: "Selam Tekle",
      position: "Head of Finance",
      department: "Finance",
      expertise: ["Financial Planning", "Investment", "Risk Management"],
      image: "/placeholder.svg?height=300&width=300",
      joined: "2018",
    },
    {
      name: "Bereket Yohannes",
      position: "Head of Accounting",
      department: "Finance",
      expertise: ["Financial Reporting", "Auditing", "Compliance"],
      image: "/placeholder.svg?height=300&width=300",
      joined: "2021",
    },
    {
      name: "Frehiwot Demeke",
      position: "Head of Compliance",
      department: "Finance",
      expertise: ["Regulatory Compliance", "Risk Assessment", "Policy Development"],
      image: "/placeholder.svg?height=300&width=300",
      joined: "2020",
    },
    {
      name: "Henok Tadesse",
      position: "Head of Marketing",
      department: "Marketing",
      expertise: ["Digital Marketing", "Brand Strategy", "Market Research"],
      image: "/placeholder.svg?height=300&width=300",
      joined: "2019",
    },
  ]

  // Group department heads by department
  const departmentGroups = departmentHeads.reduce((groups, head) => {
    if (!groups[head.department]) {
      groups[head.department] = []
    }
    groups[head.department].push(head)
    return groups
  }, {})

  return (
    <section className="py-12 bg-muted/50 rounded-xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Department Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the experts who lead our specialized departments
          </p>
        </motion.div>

        {Object.entries(departmentGroups).map(([department, heads], deptIndex) => (
          <div key={department} className="mb-12">
            <motion.h3
              className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {department} Department
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {heads.map((head, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + deptIndex * 0.2 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-md transition-all">
                    <div className="relative">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={head.image || "/placeholder.svg"}
                          alt={head.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-primary/90 text-white hover:bg-primary">
                          Since {head.joined}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg">{head.name}</h4>
                      <p className="text-sm text-primary mb-3">{head.position}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {head.expertise.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-2 mt-3">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

