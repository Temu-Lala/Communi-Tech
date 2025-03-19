import { TeamHero } from "@/components/team-hero"
import { ExecutiveTeam } from "@/components/executive-team"
import { DepartmentHeads } from "@/components/department-heads"
import { TeamMembers } from "@/components/team-members"

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <TeamHero />
      <ExecutiveTeam />
      <DepartmentHeads />
      <TeamMembers />
    </div>
  )
}

