"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500", className)}>
      {children}
    </span>
  )
}

