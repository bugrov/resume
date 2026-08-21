export type Locale = 'ru' | 'en' | 'ja'

export interface StackItemT {
  id: string
  title: string
  description: string
  icon: string
}

export interface AdvantageItemT {
  id: string
  title: string
  description: string
  icon: string
}

export interface ExperienceItemT {
  id: string
  company: string
  role: string
  period: string
  duration: string
  points: string[]
}

export interface SkillGroupT {
  id: string
  title: string
  skills: string[]
}

export interface LanguageItemT {
  id: string
  name: string
  level: string
  percent: number
}

export interface CertificateT {
  id: string
  title: string
  issuer: string
  year: string
}

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  nav: {
    hero: string
    stack: string
    experience: string
    skills: string
    languages: string
    contact: string
  }
  a11y: {
    backToTop: string
    openMenu: string
    closeMenu: string
    localeSwitch: string
    scrollBack: string
    scrollForward: string
  }
  theme: {
    toLight: string
    toDark: string
  }
  hero: {
    badge: string
    fullName: string
    role: string
    roleStack: string
    tagline: string
    taglineSecondary: string
    ctaTelegram: string
    ctaExperience: string
    location: string
    openToWork: string
  }
  stackSection: {
    eyebrow: string
    title: string
    description: string
    techTitle: string
    items: StackItemT[]
  }
  advantages: AdvantageItemT[]
  experience: {
    eyebrow: string
    title: string
    description: string
    items: ExperienceItemT[]
  }
  skills: {
    eyebrow: string
    title: string
    description: string
    groups: SkillGroupT[]
    educationTitle: string
    certificatesTitle: string
  }
  education: {
    institution: string
    faculty: string
    speciality: string
    period: string
  }
  certificates: CertificateT[]
  languages: {
    eyebrow: string
    title: string
    note: string
    items: LanguageItemT[]
  }
  contact: {
    title: string
    description: string
    ctaTelegram: string
  }
  footer: {
    secret: string
  }
  social: {
    telegram: string
    github: string
    vk: string
    email: string
  }
}
