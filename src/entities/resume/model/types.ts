export interface StackItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  duration: string
  points: string[]
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export interface LanguageItem {
  id: string
  name: string
  level: string
  percent: number
}

export interface AdvantageItem {
  id: string
  title: string
  description: string
  icon: string
}
