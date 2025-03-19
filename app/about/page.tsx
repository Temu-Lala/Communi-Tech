import { AboutHero } from "@/components/about-hero"
import { VisionMission } from "@/components/vision-mission"
import { CompanyValues } from "@/components/company-values"
import { CompanyStructure } from "@/components/company-structure"
import { CompanyTimeline } from "@/components/company-timeline"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <AboutHero />
      <VisionMission />
      <CompanyValues />
      <CompanyTimeline />
      <CompanyStructure />
      <TeamSection />
    </div>
  )
}

