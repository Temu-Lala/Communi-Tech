"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useTranslation } from "./language-provider"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const { t } = useTranslation()

  const testimonials = [
    {
      quote:
        "fraud prevention solution has prevented the loss of substantial valuable resources.",
      author: "Kidst Abebe",
      position: "CTO, Financial Services Inc.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The smart parking system implemented by the company transformed our facility management. Efficiency is up by 40%, and customer satisfaction has never been higher",
      author: "Solomon Tadesse",
      position: "Operations Director",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Their network solutions are reliable and scalable. We've been able to expand our operations without any connectivity issues thanks to the company.",
      author: "Ayana Bekele",
      position: "IT Manager, Global Enterprises",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from the businesses we've helped transform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-blue-500 mb-4" />
                  <p className="italic text-muted-foreground">{testimonial.quote}</p>
                </CardContent>
                <CardFooter className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

