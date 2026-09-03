import type { Dictionary } from '../types'

export const en: Dictionary = {
  meta: {
    title: 'Alexander Bugrov — Fullstack Developer',
    description:
      'Alexander Bugrov — Fullstack Developer. Vue.js, Nuxt.js, React, Next.js, Node.js, NestJS, PHP. 6+ years of commercial development, experience in architecture and maintaining large projects.',
  },
  nav: {
    hero: 'About',
    stack: 'Stack',
    experience: 'Experience',
    skills: 'Skills',
    languages: 'Languages',
    contact: 'Contact',
  },
  a11y: {
    backToTop: 'Back to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    localeSwitch: 'Language / Язык / 言語',
    scrollBack: 'Scroll back',
    scrollForward: 'Scroll forward',
  },
  theme: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
  },
  hero: {
    badge: "Hi, I'm",
    fullName: 'Alexander Bugrov',
    role: 'Fullstack Developer',
    roleStack: 'Vue.js / Nuxt.js / React / Next.js · Node.js / NestJS',
    tagline:
      'I build interfaces with Vue, Nuxt and React, and backends with NestJS and PHP. 6+ years of commercial development: from maintaining large legacy systems to building architecture from scratch.',
    taglineSecondary:
      'I actively use AI tools in development — GitHub Copilot, Cursor, ChatGPT, Claude — to write code faster and cleaner.',
    ctaTelegram: 'Message me on Telegram',
    ctaExperience: 'View experience',
    location: 'Tula, Russia · remote',
    openToWork: 'Open to new opportunities',
  },
  stackSection: {
    eyebrow: 'Why me',
    title: 'Strengths & stack',
    description: "A quick look at how I'm useful on a team — and the technologies I work with every day.",
    techTitle: 'Technologies I use',
    items: [
      {
        id: 'frontend',
        title: 'Frontend',
        description: 'Vue.js, Nuxt.js, Pinia, React, Next.js, TypeScript — my main focus.',
        icon: 'layout',
      },
      {
        id: 'backend',
        title: 'Backend',
        description: 'Node.js and NestJS as my preferred server-side stack.',
        icon: 'server',
      },
      {
        id: 'php',
        title: 'PHP & 1C-Bitrix',
        description: 'Solid commercial experience: PHP 7/8, Laravel, 1C-Bitrix (D7, ORM).',
        icon: 'code',
      },
      {
        id: 'db',
        title: 'Databases',
        description: 'MySQL, PostgreSQL, Redis, schema design, migrations, query optimization.',
        icon: 'database',
      },
      {
        id: 'infra',
        title: 'Infrastructure',
        description: 'Git, Docker, PM2, CI/CD, Nginx, Linux — from development to deployment.',
        icon: 'server-cog',
      },
      {
        id: 'ai',
        title: 'AI tools',
        description: 'GitHub Copilot, Cursor, ChatGPT, Claude, LLMs and AI agents in everyday work.',
        icon: 'sparkles',
      },
      {
        id: 'api',
        title: 'APIs & integrations',
        description: 'REST APIs, GraphQL, webhooks, payment systems, SDK packages, mindbox.ru.',
        icon: 'plug',
      },
      {
        id: 'architecture',
        title: 'Architecture & review',
        description: 'OOP, SOLID, DRY, DI, design patterns, code review, Agile/Kanban.',
        icon: 'git-branch',
      },
    ],
  },
  advantages: [
    {
      id: 'fullcycle',
      title: 'Full-cycle ownership',
      description:
        "From backend architecture decisions to the finished interface — I own tasks end to end, not just my part of them.",
      icon: 'infinity',
    },
    {
      id: 'ts-lean',
      title: 'TypeScript-leaning',
      description:
        "My priority is the modern TS stack: Vue/Nuxt, React/Next and NestJS. That said, I'm not afraid of a PHP backend when a project calls for it.",
      icon: 'chevrons-right',
    },
    {
      id: 'legacy',
      title: 'Comfortable with legacy',
      description:
        "I've built products from scratch and maintained large projects with history — I can navigate someone else's code without panic.",
      icon: 'history',
    },
    {
      id: 'ai-native',
      title: 'AI as part of the process',
      description:
        'I use Copilot, Cursor, ChatGPT and Claude every day — it speeds up routine work and leaves more time for architecture.',
      icon: 'sparkles',
    },
    {
      id: 'oss',
      title: 'Public OSS package',
      description:
        'I maintain an open-source PHP SDK for Yandex Tracker (packagist.org/bugrov/yandex-tracker) — real external users, not a toy project.',
      icon: 'package',
    },
  ],
  experience: {
    eyebrow: 'Work experience',
    title: '6+ years of commercial development',
    description: 'From maintaining large projects with history to designing architecture and shipping new features from scratch.',
    items: [
      {
        id: 'express-office',
        company: 'Express Ofis LLC',
        role: 'Fullstack Developer',
        period: 'December 2023 — Present',
        duration: '2 years 9 months',
        points: [
          'Sped up catalog delivery (200,000+ products) by more than 50% — from ~4s to under 2s — by rewriting filtering, optimizing queries, and adding Redis caching.',
          'Built a design system of 20+ reusable UI components with unified ESLint/Prettier configs, covered by tests (Vitest, Storybook).',
          'Implemented server-side rendering (SSR) from scratch on Nuxt.js: SEO optimization, lazy-loaded breadcrumbs and meta tags, middleware, and state management with Pinia.',
          'Designed and built full-cycle online store modules (DB, API, UI/UX) for 2 in-house sites with a 200,000+ product catalog.',
          'Built 5+ custom PrestaShop modules (catalog and order logic, integrations with external services), covering functionality missing from the stock version.',
          'Cut incident diagnosis time by roughly 20% by setting up stability/performance monitoring and unified error logging.',
          'Migrated 40+ endpoints from PHP to Nuxt.js with zero downtime, preparing test data and mocks for each endpoint.',
        ],
      },
      {
        id: 'intensa',
        company: 'Intensa Studio',
        role: 'Web Developer',
        period: 'January 2020 — November 2023',
        duration: '3 years 11 months',
        points: [
          'Built and maintained custom functionality, modules and integrations (payment gateways, delivery services) on 1C-Bitrix for 7–8 agency clients.',
          'Migrated 3 large projects to a decoupled backend/frontend architecture (PHP + Vue.js), introducing Vue.js and React on individual pages without rewriting the sites from scratch.',
          'Extended React SPA applications across 3+ projects, ensuring cross-browser compatibility and responsive layouts.',
        ],
      },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tools I use',
    description: 'The technical stack, infrastructure and AI tools I rely on in everyday work.',
    groups: [
      {
        id: 'frontend',
        title: 'Frontend',
        skills: [
          'JavaScript',
          'TypeScript',
          'Vue.js',
          'Vue 3',
          'Nuxt.js',
          'Nuxt 3',
          'Pinia',
          'Redux',
          'Zustand',
          'React',
          'Next.js',
          'SSR',
          'HTML5',
          'CSS3 / SCSS',
          'Webpack / Vite',
          'TanStack Query',
          'TanStack Table',
          'react-hook-form',
          'Zod',
          'Vitest',
          'Storybook',
          'Jest',
        ],
      },
      {
        id: 'backend',
        title: 'Backend',
        skills: [
          'Node.js',
          'NestJS',
          'PHP 7/8',
          'Laravel',
          '1C-Bitrix (D7, ORM)',
          'REST API',
          'GraphQL',
          'Prisma',
          'MySQL / PostgreSQL',
          'Redis',
          'JWT',
          'Guzzle',
          'Unit testing',
        ],
      },
      {
        id: 'infra',
        title: 'Infrastructure',
        skills: ['Git', 'GitHub / GitLab', 'Linux', 'Nginx', 'Apache', 'Docker', 'Kubernetes', 'PM2', 'CI/CD', 'Postman'],
      },
      {
        id: 'ai',
        title: 'AI & tools',
        skills: ['ChatGPT', 'GitHub Copilot', 'Claude', 'Cursor', 'LLM', 'AI Agents', 'Prompt Engineering'],
      },
    ],
    educationTitle: 'Education',
  },
  education: {
    institution: 'Leo Tolstoy Tula State Pedagogical University',
    faculty: 'Faculty of Mathematics, Physics and Computer Science',
    speciality: 'Mathematical Support and Administration of Information Systems',
    period: '2019 · Incomplete higher education',
  },
  languages: {
    eyebrow: 'Languages',
    title: 'Languages I speak',
    note: 'Russian is native, English is used for reading documentation and communicating with the team, Japanese is currently being learned.',
    items: [
      { id: 'ru', name: 'Russian', level: 'Native', percent: 100 },
      {
        id: 'en',
        name: 'English',
        level: 'Intermediate (B1–B2) — reading documentation, technical communication',
        percent: 65,
      },
      { id: 'jp', name: '日本語 · Japanese', level: 'N4', percent: 35 },
    ],
  },
  contact: {
    title: 'Ready to discuss a project or a role?',
    description: 'I respond quickly and I\'m open to remote work and interesting challenges on Vue/Nuxt/React and NestJS.',
    ctaTelegram: 'Message me on Telegram',
  },
  footer: {
    secret: "Thanks for reading all the way down! Looking forward to your offer 🚀",
  },
  social: {
    telegram: 'Telegram',
    github: 'GitHub',
    vk: 'VK',
    email: 'Email',
  },
}
