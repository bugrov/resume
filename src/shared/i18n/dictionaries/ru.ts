import type { Dictionary } from '../types'

export const ru: Dictionary = {
  meta: {
    title: 'Александр Бугров — Fullstack-разработчик',
    description:
      'Александр Бугров — Fullstack-разработчик. Vue.js, Nuxt.js, React, Next.js, Node.js, NestJS, PHP. 6+ лет коммерческой разработки, опыт архитектуры и поддержки крупных проектов.',
  },
  nav: {
    hero: 'Обо мне',
    stack: 'Стек',
    experience: 'Опыт',
    skills: 'Навыки',
    languages: 'Языки',
    contact: 'Контакты',
  },
  a11y: {
    backToTop: 'Наверх',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    localeSwitch: 'Язык / Language / 言語',
    scrollBack: 'Прокрутить назад',
    scrollForward: 'Прокрутить вперёд',
  },
  theme: {
    toLight: 'Включить светлую тему',
    toDark: 'Включить тёмную тему',
  },
  hero: {
    badge: 'Привет, я',
    fullName: 'Александр Бугров',
    role: 'Fullstack-разработчик',
    roleStack: 'Vue.js / Nuxt.js / React / Next.js · Node.js / NestJS',
    tagline:
      'Делаю интерфейсы на Vue, Nuxt и React, а бэкенды — на NestJS и PHP. 6+ лет в коммерческой разработке: от поддержки крупных legacy-систем до архитектуры с нуля.',
    taglineSecondary:
      'Активно использую ИИ-инструменты в разработке — GitHub Copilot, Cursor, ChatGPT, Claude — чтобы писать код быстрее и чище.',
    ctaTelegram: 'Написать в Telegram',
    ctaExperience: 'Смотреть опыт',
    location: 'Тула, Россия · удалённо',
    openToWork: 'Открыт для новых предложений',
  },
  stackSection: {
    eyebrow: 'Почему я',
    title: 'Преимущества и стек',
    description: 'Коротко о том, чем я полезен в команде — и с какими технологиями работаю каждый день.',
    techTitle: 'Технологии в работе',
    items: [
      {
        id: 'frontend',
        title: 'Frontend',
        description: 'Vue.js, Nuxt.js, Pinia, React, Next.js, TypeScript — основной фокус развития.',
        icon: 'layout',
      },
      {
        id: 'backend',
        title: 'Backend',
        description: 'Node.js и NestJS как приоритетный серверный стек.',
        icon: 'server',
      },
      {
        id: 'php',
        title: 'PHP & 1С-Битрикс',
        description: 'Уверенный коммерческий опыт: PHP 7/8, Laravel, 1C-Bitrix (D7, ORM).',
        icon: 'code',
      },
      {
        id: 'db',
        title: 'Базы данных',
        description: 'MySQL, PostgreSQL, проектирование схем, миграции, оптимизация запросов.',
        icon: 'database',
      },
      {
        id: 'infra',
        title: 'Инфраструктура',
        description: 'Git, Docker, CI/CD, Nginx, Linux — от разработки до деплоя.',
        icon: 'server-cog',
      },
      {
        id: 'ai',
        title: 'ИИ-инструменты',
        description: 'GitHub Copilot, Cursor, ChatGPT, Claude, LLM и AI-агенты в ежедневной работе.',
        icon: 'sparkles',
      },
      {
        id: 'api',
        title: 'API и интеграции',
        description: 'REST API, вебхуки, платёжные системы, SDK-пакеты, mindbox.ru.',
        icon: 'plug',
      },
      {
        id: 'architecture',
        title: 'Архитектура и ревью',
        description: 'ООП, SOLID, DRY, DI, паттерны проектирования, код-ревью.',
        icon: 'git-branch',
      },
    ],
  },
  advantages: [
    {
      id: 'fullcycle',
      title: 'Полный цикл',
      description:
        'От архитектурного решения на backend до готового интерфейса — веду задачи целиком, а не только свою часть.',
      icon: 'infinity',
    },
    {
      id: 'ts-lean',
      title: 'Уклон в TypeScript',
      description:
        'Приоритет — современный TS-стек: Vue/Nuxt, React/Next и NestJS. При этом не боюсь PHP-бэкенда, если того требует проект.',
      icon: 'chevrons-right',
    },
    {
      id: 'legacy',
      title: 'Работа с legacy',
      description:
        'Есть опыт и разработки с нуля, и поддержки крупных проектов с историей — умею разбираться в чужом коде без паники.',
      icon: 'history',
    },
    {
      id: 'ai-native',
      title: 'ИИ как часть процесса',
      description:
        'Использую Copilot, Cursor, ChatGPT и Claude каждый день — это ускоряет рутину и оставляет больше времени на архитектуру.',
      icon: 'sparkles',
    },
  ],
  experience: {
    eyebrow: 'Опыт работы',
    title: '6+ лет в коммерческой разработке',
    description: 'От поддержки крупных проектов с историей до архитектуры и запуска нового функционала с нуля.',
    items: [
      {
        id: 'express-office',
        company: 'Экспресс офис, ООО',
        role: 'Fullstack-разработчик',
        period: 'Декабрь 2023 — настоящее время',
        duration: '2 года 9 месяцев',
        points: [
          'Разрабатываю и поддерживаю основной функционал интернет-магазина на связке PHP + Nuxt.js (backend и frontend разделены, взаимодействие через REST API).',
          'Проектирую и разрабатываю кастомные модули для PrestaShop: логика каталога, заказов, интеграции с внешними сервисами.',
          'Веду задачи как fullstack-специалист полного цикла: от архитектурного решения на backend до реализации интерфейса на Nuxt.js.',
          'Работаю с legacy-кодом проекта, дорабатываю и рефакторю существующий функционал без остановки продакшена.',
        ],
      },
      {
        id: 'intensa',
        company: 'Студия Intensa',
        role: 'Веб-разработчик',
        period: 'Январь 2020 — Ноябрь 2023',
        duration: '3 года 11 месяцев',
        points: [
          'Разрабатывал и поддерживал сайты на 1С-Битрикс: кастомный функционал, модули, интеграции с внешними системами, платёжными шлюзами и службами доставки.',
          'Реализовывал проекты с разделённым backend/frontend на PHP + Vue.js, внедрял Vue.js и React на отдельные страницы и разделы существующих сайтов.',
          'Дорабатывал и поддерживал SPA-приложения на React.',
          'Занимался вёрсткой и интеграцией вёрстки в проекты, обеспечивая кроссбраузерность и адаптивность интерфейсов.',
        ],
      },
    ],
  },
  skills: {
    eyebrow: 'Навыки',
    title: 'Инструменты, которыми пользуюсь',
    description: 'Технический стек, инфраструктура и ИИ-инструменты, которые я применяю в ежедневной работе.',
    groups: [
      {
        id: 'frontend',
        title: 'Frontend',
        skills: [
          'JavaScript',
          'TypeScript',
          'Vue.js',
          'Nuxt.js',
          'Pinia',
          'React',
          'Next.js',
          'HTML5',
          'CSS3 / SCSS',
          'Webpack / Vite',
          'TanStack Query',
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
          'MySQL / PostgreSQL',
          'JWT',
          'Unit testing',
        ],
      },
      {
        id: 'infra',
        title: 'Инфраструктура',
        skills: ['Git', 'GitHub / GitLab', 'Linux', 'Nginx', 'Docker', 'CI/CD', 'Postman'],
      },
      {
        id: 'ai',
        title: 'ИИ и инструменты',
        skills: ['ChatGPT', 'GitHub Copilot', 'Claude', 'Cursor', 'LLM', 'AI-агенты', 'Промт-инжиниринг'],
      },
    ],
    educationTitle: 'Образование',
    certificatesTitle: 'Сертификаты',
  },
  education: {
    institution: 'Тульский государственный педагогический университет им. Л. Н. Толстого',
    faculty: 'Факультет математики, физики и информатики',
    speciality: 'Математическое обеспечение и администрирование информационных систем',
    period: '2019 · Неоконченное высшее',
  },
  certificates: [
    { id: 'react', title: 'React', issuer: 'Udemy', year: '2022' },
    { id: 'redux', title: 'Redux', issuer: 'Udemy', year: '2022' },
    { id: 'bitrix', title: 'Экзамены по Битрикс', issuer: '1C-Bitrix', year: '2020' },
  ],
  languages: {
    eyebrow: 'Языки',
    title: 'Языки общения',
    note: 'Русский, английский для чтения документации и общения с командой, японский — в процессе изучения.',
    items: [
      { id: 'ru', name: 'Русский', level: 'Родной', percent: 100 },
      {
        id: 'en',
        name: 'Английский',
        level: 'Intermediate (B1–B2) — чтение документации, техническое общение',
        percent: 65,
      },
      { id: 'jp', name: '日本語 · Японский', level: 'N4', percent: 35 },
    ],
  },
  contact: {
    title: 'Готовы обсудить проект или вакансию?',
    description: 'Отвечаю быстро, открыт к удалённой работе и интересным задачам на Vue/Nuxt/React и NestJS.',
    ctaTelegram: 'Написать в Telegram',
  },
  footer: {
    secret: 'Спасибо, что дочитали до конца! Жду ваш оффер 🚀',
  },
  social: {
    telegram: 'Telegram',
    github: 'GitHub',
    vk: 'VK',
    email: 'Эл. почта',
  },
}
