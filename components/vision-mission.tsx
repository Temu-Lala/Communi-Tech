"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "./language-provider"
import { Lightbulb, Target, Award } from "lucide-react"

export function VisionMission() {
  const { t } = useTranslation()

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
          <h2 className="text-3xl font-bold mb-4">Vision, Mission & Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our work and define our culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>{t("vision")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                Exceeding
 Expectations with SMART
 Solutions.
 In Communi Tech we see the future
 as not only to meet the needs of
 customers but also to provide
 customers with new SMART
 solutions that exceeds their
 expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle>{t("mission")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                CommuniTech aims to
 become a leader in enhancing
 services using state of the art
 SMART solutions, Communi Tech is a
 true
 innovator
 continuously
 creating solutions inspired by
 innovation and empowered by
 technology
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </div>
                <CardTitle>{t("values")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <span className="  font-bold text-green-600 text-xl">Innovation:</span>CommuniTech is dedicated to providing new
 and innovative Smart Solutions using
 state-of-the-art
 technologies.
                  </li>
                  <li>
                    <span className=" font-bold text-green-600 text-xl"> Business Conduct
                    :</span>  CommuniTech conducts business with the
 highest levels of integrity and provide
 our clients with turnkey state of the art
 SMART Solutions.
                  </li>
                  <li>
                    <span className=" font-bold text-green-600 text-xl">Excellence:</span>  We provide our clients with the highest
 standards of service, while ensuring
 their needs are met in a timely fashion.
  Our technology meets their
 demands and today’s challenging
 business requirements.
                  </li>
               
                  <li>
                    <span className=" font-bold text-green-600 text-xl"> Empowering Stakeholders
                    :</span> Empowering our clients, partners and
 our employees is the core value of our
 business in order to provide the best
 and most appropriate services that will
 meet the highest business standards at
 all times.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

