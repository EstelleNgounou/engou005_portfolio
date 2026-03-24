// Shared TypeScript types for the portfolio

export type Project = {
  title:       string
  description: string
  tags:        string[]
  github:      string
  live:        string
}

export type SkillGroup = {
  category: string
  skills:   { name: string; level: number }[]
}

export type EducationItem = {
  degree:      string
  institution: string
  period:      string
  description: string
}
