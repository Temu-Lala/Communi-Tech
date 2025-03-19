import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { MapSection } from "@/components/map-section"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
      <MapSection />
    </div>
  )
}

