// Тексты <title>/description/og:* для каждого языка. Файл намеренно без импортов:
// его читают и словари, и плагин сборки (vite-plugins/localePages.ts), который
// генерирует статические /en и /ja с правильными метатегами для превью-ботов.
export const SEO_META = {
  ru: {
    title: 'Александр Бугров — Fullstack-разработчик',
    description:
      'Александр Бугров — Fullstack-разработчик. Vue.js, Nuxt.js, React, Next.js, Node.js, NestJS, PHP. 6+ лет коммерческой разработки, опыт архитектуры и поддержки крупных проектов.',
  },
  en: {
    title: 'Alexander Bugrov — Fullstack Developer',
    description:
      'Alexander Bugrov — Fullstack Developer. Vue.js, Nuxt.js, React, Next.js, Node.js, NestJS, PHP. 6+ years of commercial development, experience in architecture and maintaining large projects.',
  },
  ja: {
    title: 'アレクサンドル・ブグロフ — フルスタックエンジニア',
    description:
      'アレクサンドル・ブグロフ、フルスタックエンジニア。Vue.js、Nuxt.js、React、Next.js、Node.js、NestJS、PHPを使用。実務経験6年以上、大規模プロジェクトの設計・保守経験あり。',
  },
} as const
