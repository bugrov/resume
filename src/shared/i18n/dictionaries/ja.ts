import type { Dictionary } from '../types'

export const ja: Dictionary = {
  meta: {
    title: 'アレクサンドル・ブグロフ — フルスタックエンジニア',
    description:
      'アレクサンドル・ブグロフ、フルスタックエンジニア。Vue.js、Nuxt.js、React、Next.js、Node.js、NestJS、PHPを使用。実務経験6年以上、大規模プロジェクトの設計・保守経験あり。',
  },
  nav: {
    hero: 'プロフィール',
    stack: 'スタック',
    experience: '経歴',
    skills: 'スキル',
    languages: '言語',
    contact: '問い合わせ',
  },
  a11y: {
    backToTop: 'トップへ戻る',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    localeSwitch: '言語 / Language / Язык',
    scrollBack: '前へスクロール',
    scrollForward: '次へスクロール',
  },
  theme: {
    toLight: 'ライトテーマに切り替え',
    toDark: 'ダークテーマに切り替え',
  },
  hero: {
    badge: 'はじめまして、',
    fullName: 'アレクサンドル・ブグロフ',
    role: 'フルスタックエンジニア',
    roleStack: 'Vue.js / Nuxt.js / React / Next.js · Node.js / NestJS',
    tagline:
      'Vue、Nuxt、Reactでインターフェースを構築し、バックエンドはNestJSとPHPで開発しています。実務経験6年以上、大規模なレガシーシステムの保守からゼロからのアーキテクチャ設計まで幅広く対応しています。',
    taglineSecondary:
      '開発ではAIツール(GitHub Copilot、Cursor、ChatGPT、Claude)を積極的に活用し、より速く、よりクリーンなコードを書くよう心がけています。',
    ctaTelegram: 'Telegramでメッセージを送る',
    ctaExperience: '職務経歴を見る',
    location: 'ロシア・トゥーラ市 · リモート勤務可',
    openToWork: '新しいお仕事のご相談を歓迎します',
  },
  stackSection: {
    eyebrow: '選ばれる理由',
    title: '強みと技術スタック',
    description: 'チームにどう貢献できるか、そして日々使用している技術について簡潔にご紹介します。',
    techTitle: '使用技術',
    items: [
      {
        id: 'frontend',
        title: 'Frontend',
        description: 'Vue.js、Nuxt.js、Pinia、React、Next.js、TypeScriptを中心に開発しています。',
        icon: 'layout',
      },
      {
        id: 'backend',
        title: 'Backend',
        description: 'Node.jsとNestJSを主なサーバーサイド技術としています。',
        icon: 'server',
      },
      {
        id: 'php',
        title: 'PHP & 1C-Bitrix',
        description: '実務での豊富な経験:PHP 7/8、Laravel、1C-Bitrix(D7、ORM)。',
        icon: 'code',
      },
      {
        id: 'db',
        title: 'データベース',
        description: 'MySQL、PostgreSQL、Redis、スキーマ設計、マイグレーション、クエリの最適化。',
        icon: 'database',
      },
      {
        id: 'infra',
        title: 'インフラ',
        description: 'Git、Docker、PM2、CI/CD、Nginx、Linux——開発からデプロイまで対応。',
        icon: 'server-cog',
      },
      {
        id: 'ai',
        title: 'AIツール',
        description: 'GitHub Copilot、Cursor、ChatGPT、Claude、LLM、AIエージェントを日常的に活用。',
        icon: 'sparkles',
      },
      {
        id: 'api',
        title: 'API・連携',
        description: 'REST API、GraphQL、Webhook、決済システム、SDKパッケージ、mindbox.ru。',
        icon: 'plug',
      },
      {
        id: 'architecture',
        title: '設計・レビュー',
        description: 'OOP、SOLID、DRY、DI、デザインパターン、コードレビュー、Agile/Kanban。',
        icon: 'git-branch',
      },
    ],
  },
  advantages: [
    {
      id: 'fullcycle',
      title: 'フルサイクル対応',
      description:
        'バックエンドの設計判断から完成したインターフェースまで、自分の担当範囲だけでなくタスク全体を最後まで責任を持って進めます。',
      icon: 'infinity',
    },
    {
      id: 'ts-lean',
      title: 'TypeScript中心の技術選定',
      description:
        '優先するのはVue/Nuxt、React/Next、NestJSといったモダンなTypeScriptスタックです。もちろん、プロジェクトの要件に応じてPHPバックエンドにも対応可能です。',
      icon: 'chevrons-right',
    },
    {
      id: 'legacy',
      title: 'レガシーコードへの対応力',
      description:
        'ゼロからの新規開発と、歴史のある大規模プロジェクトの保守、両方の経験があります。他人が書いたコードでも冷静に読み解くことができます。',
      icon: 'history',
    },
    {
      id: 'ai-native',
      title: '業務に根付いたAI活用',
      description:
        'Copilot、Cursor、ChatGPT、Claudeを毎日活用し、定型作業を効率化することで、設計により多くの時間を割けるようにしています。',
      icon: 'sparkles',
    },
    {
      id: 'oss',
      title: '公開OSSパッケージ',
      description:
        'Yandex Tracker向けのオープンソースPHP SDK(packagist.org/bugrov/yandex-tracker)を公開・保守しています。実際の外部ユーザーがいる本物のプロジェクトです。',
      icon: 'package',
    },
  ],
  experience: {
    eyebrow: '職務経歴',
    title: '実務経験6年以上',
    description: '歴史あるプロジェクトの保守から、新機能のゼロからの設計・リリースまで幅広く対応しています。',
    items: [
      {
        id: 'express-office',
        company: 'Express Ofis LLC',
        role: 'フルスタックエンジニア',
        period: '2023年12月 — 現在',
        duration: '2年9ヶ月',
        points: [
          'カタログ(20万点以上)の表示速度を50%以上改善(約4秒→2秒未満)——フィルタリング処理の書き直し、クエリ最適化、Redisキャッシュの導入により実現。',
          'ESLint/Prettier設定を統一した再利用可能なUIコンポーネント20点以上からなるデザインシステムを構築し、テスト(Vitest、Storybook)でカバー。',
          'Nuxt.jsによるサーバーサイドレンダリング(SSR)をゼロから実装:SEO最適化、パンくずリスト・メタタグの遅延読み込み、ミドルウェア、Piniaによる状態管理。',
          '自社2サイト(カタログ20万点以上)向けにフルサイクルのECモジュール(DB、API、UI/UX)を設計・実装。',
          'PrestaShop向けカスタムモジュールを5点以上開発(カタログ・注文ロジック、外部サービス連携)し、標準機能にない要件をカバー。',
          '安定性・パフォーマンスの監視と統一されたエラーロギングを整備し、障害診断時間を約20%短縮。',
          'PHPからNuxt.jsへ40以上のエンドポイントを本番停止なしで移行(各エンドポイント用のテストデータ・モックを準備)。',
        ],
      },
      {
        id: 'intensa',
        company: 'Intensa Studio',
        role: 'Webエンジニア',
        period: '2020年1月 — 2023年11月',
        duration: '3年11ヶ月',
        points: [
          '1С-Bitrixによるカスタム機能・モジュール・連携(決済ゲートウェイ、配送サービス)を開発・保守(代理店クライアント7〜8社)。',
          '大規模プロジェクト3件をバックエンド/フロントエンド分離アーキテクチャ(PHP + Vue.js)へ移行し、サイトの全面書き換えなしにVue.js/Reactを個別ページへ導入。',
          'ReactによるSPAを3件以上のプロジェクトで改修し、クロスブラウザ対応とレスポンシブデザインを実現。',
        ],
      },
    ],
  },
  skills: {
    eyebrow: 'スキル',
    title: '使用ツール',
    description: '日常業務で活用している技術スタック、インフラ、AIツールをご紹介します。',
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
        title: 'インフラ',
        skills: ['Git', 'GitHub / GitLab', 'Linux', 'Nginx', 'Apache', 'Docker', 'Kubernetes', 'PM2', 'CI/CD', 'Postman'],
      },
      {
        id: 'ai',
        title: 'AI・ツール',
        skills: ['ChatGPT', 'GitHub Copilot', 'Claude', 'Cursor', 'LLM', 'AIエージェント', 'プロンプトエンジニアリング'],
      },
    ],
    educationTitle: '学歴',
  },
  education: {
    institution: 'トゥーラ国立レフ・トルストイ教育大学',
    faculty: '数学・物理学・情報学部',
    speciality: '情報システムの数理的支援と運用管理',
    period: '2019年 · 高等教育未修了',
  },
  languages: {
    eyebrow: '言語',
    title: '使用言語',
    note: 'ロシア語は母語、英語は技術文書の読解やチームとのコミュニケーションに使用しており、日本語は現在学習中です。',
    items: [
      { id: 'ru', name: 'ロシア語', level: '母語(ネイティブ)', percent: 100 },
      {
        id: 'en',
        name: '英語',
        level: '中級(B1〜B2)——技術文書の読解、業務コミュニケーション',
        percent: 65,
      },
      { id: 'jp', name: '日本語', level: 'N4', percent: 35 },
    ],
  },
  contact: {
    title: 'プロジェクトやお仕事のご相談をお待ちしております',
    description: '迅速に返信いたします。リモートワーク、Vue/Nuxt/React・NestJSを用いたやりがいのある案件を歓迎します。',
    ctaTelegram: 'Telegramでメッセージを送る',
  },
  footer: {
    secret: '最後までお読みいただき、ありがとうございます!ご連絡をお待ちしております 🚀',
  },
  social: {
    telegram: 'Telegram',
    github: 'GitHub',
    vk: 'VK',
    email: 'メール',
  },
}
