import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { ServicesPreview } from "@/components/services-preview"
import { ClientsSection } from "@/components/clients-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CollaborationsSection } from "@/components/collaborations-section"
import { CTASection } from "@/components/cta-section"
import SolutionShowcase from "@/components/solution-showcase"
export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <SolutionShowcase />
      <ClientsSection />
      <TestimonialsSection />
      <CollaborationsSection />
      <CTASection />
      
    </div>
  )
}

