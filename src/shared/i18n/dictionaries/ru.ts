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
        description: 'MySQL, PostgreSQL, Redis, проектирование схем, миграции, оптимизация запросов.',
        icon: 'database',
      },
      {
        id: 'infra',
        title: 'Инфраструктура',
        description: 'Git, Docker, PM2, CI/CD, Nginx, Linux — от разработки до деплоя.',
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
        description: 'REST API, GraphQL, вебхуки, платёжные системы, SDK-пакеты, mindbox.ru.',
        icon: 'plug',
      },
      {
        id: 'architecture',
        title: 'Архитектура и ревью',
        description: 'ООП, SOLID, DRY, DI, паттерны проектирования, код-ревью, Agile/Kanban.',
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
    {
      id: 'oss',
      title: 'Публичный OSS-пакет',
      description:
        'Поддерживаю открытый PHP SDK для Yandex Tracker (packagist.org/bugrov/yandex-tracker) — реальные внешние пользователи, а не учебный проект.',
      icon: 'package',
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
          'Ускорил выдачу каталога (200 000+ товаров) более чем на 50% — с ~4 до менее 2 секунд — переписав фильтрацию, оптимизировав запросы и внедрив кеширование на Redis.',
          'Внедрил дизайн-систему из 20+ переиспользуемых UI-компонентов с едиными ESLint/Prettier конфигурациями, покрыл её тестами (Vitest, Storybook).',
          'Реализовал серверный рендеринг (SSR) страниц с нуля на Nuxt.js: SEO-оптимизация, ленивая подгрузка хлебных крошек и мета-тегов, middleware и state management на Pinia.',
          'Спроектировал и реализовал модули интернет-магазина полного цикла (БД, API, UI/UX) для 2 собственных сайтов сети с каталогом 200 000+ товаров.',
          'Разработал 5+ кастомных модулей для PrestaShop (логика каталога, заказов, интеграции с внешними сервисами), закрыв функционал, которого не было в коробочной версии.',
          'Сократил время диагностики инцидентов примерно на 20%, настроив мониторинг стабильности, производительности и логирование ошибок.',
          'Мигрировал 40+ эндпоинтов с PHP на Nuxt.js без остановки продакшена, подготовив тестовые данные и моки под каждый эндпоинт.',
        ],
      },
      {
        id: 'intensa',
        company: 'Студия Intensa',
        role: 'Веб-разработчик',
        period: 'Январь 2020 — Ноябрь 2023',
        duration: '3 года 11 месяцев',
        points: [
          'Разработал и поддерживал кастомный функционал, модули и интеграции (платёжные шлюзы, службы доставки) на 1С-Битрикс для 7–8 клиентов агентства.',
          'Перевёл 3 крупных проекта на архитектуру с разделённым backend/frontend (PHP + Vue.js), внедрив Vue.js и React на отдельные страницы без переписывания сайтов с нуля.',
          'Доработал SPA-приложения на React на 3+ проектах, обеспечив кроссбраузерную и адаптивную вёрстку.',
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
        title: 'Инфраструктура',
        skills: ['Git', 'GitHub / GitLab', 'Linux', 'Nginx', 'Apache', 'Docker', 'Kubernetes', 'PM2', 'CI/CD', 'Postman'],
      },
      {
        id: 'ai',
        title: 'ИИ и инструменты',
        skills: ['ChatGPT', 'GitHub Copilot', 'Claude', 'Cursor', 'LLM', 'AI-агенты', 'Промт-инжиниринг'],
      },
    ],
    educationTitle: 'Образование',
  },
  education: {
    institution: 'Тульский государственный педагогический университет им. Л. Н. Толстого',
    faculty: 'Факультет математики, физики и информатики',
    speciality: 'Математическое обеспечение и администрирование информационных систем',
    period: '2019 · Неоконченное высшее',
  },
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
