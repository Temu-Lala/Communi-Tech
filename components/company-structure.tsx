"use client";

import { motion } from "framer-motion";
import { useTranslation } from "./language-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function CompanyStructure() {
  const { t } = useTranslation();

  const executives = [
    {
      id: "ceo",
      name: "Meron Yilma",
      position: "CEO",
      image: "/assets/photos/meron.png",
      color: "bg-blue-500",
    },
    {
      id: "cto",
      name: "Yilma Mengstu",
      position: "Admin & HR Manager",
      image: "/assets/photos/gashylma.png",
      color: "bg-yellow-400",
      reports: [
        { name: "Ashenafi Berisso", position: "IT Technical Manager" },
        { name: "Professor Abdelrahim Mohamed", position: "Senior Company Advisor" },
        {
          name: "Dawit Gebre",
          position: "Head of Engineering",
          image: "/placeholder.svg",
          reports: [
            { name: "Rahel Girma", position: "Backend Developer" },
            { name: "Yohannes Tadesse", position: "DevOps Engineer" },
          ],
        },
      ],
    },
    {
      id: "coo",
      name: "Ezra Yilma",
      position: "Deputy General Manager",
      image: "/assets/photos/ezra.jpg",
      color: "bg-yellow-400",
      reports: [
        { name: "Selamawit Bekele", position: "Project Manager" },
        { name: "Henok Assefa", position: "QA Specialist" },
        {
          name: "Meron Alemu",
          position: "Head of Logistics",
          image: "/placeholder.svg",
          reports: [
            { name: "Tigist Haile", position: "Support Lead" },
            { name: "Dawit Mengistu", position: "Technical Support" },
          ],
        },
      ],
    },
    {
      id: "cfo",
      name: "Girma Haile",
      position: "CFO",
      image: "/placeholder.svg",
      color: "bg-yellow-400",
      reports: [
        { name: "Abebe Kebede", position: "Financial Analyst" },
        { name: "Meron Tadesse", position: "Accountant" },
        {
          name: "Bereket Yohannes",
          position: "Head of Accounting",
          image: "/placeholder.svg",
          reports: [
            { name: "Yonas Haile", position: "Compliance Officer" },
            { name: "Tigist Alemu", position: "Procurement" },
          ],
        },
      ],
    },
  ];

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
          <h2 className="text-3xl font-bold mb-4">{t("Company Structure")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("Our organizational hierarchy is designed to ensure efficient operations and clear communication")}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* CEO Level */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-16"
            >
              <Link href="/team" className="block">
                <Card
                  className={`border-0 shadow-lg hover:shadow-xl transition-all w-64 ${executives[0].color} text-white`}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <Avatar className="h-16 w-16 border-2 border-white/50">
                      <AvatarImage src={executives[0].image} alt={executives[0].name} />
                      <AvatarFallback className="bg-white/20 text-white">
                        {executives[0].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-lg">{executives[0].position}</div>
                      <div className="text-sm text-white/80">{executives[0].name}</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Connecting line */}
            <div className="flex justify-center mb-4">
              <div className="h-16 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            </div>

            {/* Level 1 Executives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {executives.slice(1).map((executive, index) => (
                <div key={executive.id} className="relative">
                  <Link href="/team" className="block">
                    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all ${executive.color} text-black`}>
                      <CardContent className="p-6 flex items-center gap-4">
                        <Avatar className="h-14 w-14 border-2 border-black/10">
                          <AvatarImage src={executive.image} alt={executive.name} />
                          <AvatarFallback className="bg-black/10">{executive.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold">{executive.position}</div>
                          <div className="text-sm text-black/70">{executive.name}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                

                  {/* Department Heads */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                    {executive.reports?.map((report, reportIndex) => (
                      <div key={reportIndex} className="relative">
                        <Card className="border shadow-sm hover:shadow-md transition-all w-full">
                          <CardContent className="p-4 flex flex-col items-center text-center">
                            <Avatar className="h-12 w-12 mb-2">
                              <AvatarImage src={report.image} alt={report.name} />
                              <AvatarFallback className="bg-primary/10 text-primary">
                                {report.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="font-medium text-sm">{report.position}</div>
                            <div className="text-xs text-muted-foreground">{report.name}</div>

                            {/* Connecting line to team members */}
                          
                          </CardContent>
                        </Card>

                        {/* Team Members */}
                        {report.reports && (
                          <div className="grid grid-cols-2 gap-2 mt-8">
                            {report.reports.map((member, memberIndex) => (
                              <div key={memberIndex} className="w-full">
                                <div className="text-center">
                                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mx-auto mb-1">
                                    <span className="text-xs font-medium">{member.name.charAt(0)}</span>
                                  </div>
                                  <div className="text-xs font-medium truncate">{member.name.split(" ")[0]}</div>
                                  <div className="text-[10px] text-muted-foreground truncate">{member.position}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}