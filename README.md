# Александр Бугров — резюме-визитка

Личный сайт-визитка (одностраничник) на основе резюме fullstack-разработчика.
Фиолетово-сиреневая палитра, светлая/тёмная тема, плавная навигация по блокам,
адаптивная вёрстка (мобайл/планшет/десктоп) и пасхалка с "кружком" под курсором.

## Стек

- **React 19 + TypeScript**, сборка через **Vite**
- **Tailwind CSS v4** (утилиты, тёмная тема через класс `dark`) + **SCSS** (кастомные
  анимации, градиентный текст, эффект "spotlight" под курсором)
- Иконки: **lucide-react** (UI) + **react-icons/si** (Telegram, VK, GitHub)
- Шрифты: **Space Grotesk** (заголовки) + **Inter** (текст) + **JetBrains Mono**,
  подключены локально через `@fontsource-variable/*` (без внешних запросов к Google Fonts)
- Архитектура — **Feature-Sliced Design** (`app / pages / widgets / features / entities / shared`)

## Разработка

```bash
npm install
npm run dev       # локальный сервер на http://localhost:5173
npm run lint       # oxlint
npm run build       # tsc -b && vite build → dist/
npm run preview     # предпросмотр собранного билда
```

## Структура проекта (FSD)

```
src/
  app/            # инициализация приложения: стили, точка входа App.tsx
    styles/         # tailwind.css (тема/токены) + main.scss (анимации, кастомные классы)
  pages/
    home/           # HomePage — единственная страница, собирает виджеты
  widgets/          # самостоятельные блоки страницы
    header/           # шапка: логотип, навигация, соцсети, переключатель темы
    hero/             # приветствие, фото, тезисы
    stack/            # преимущества + карусель стека технологий
    experience/       # опыт работы (таймлайн)
    skills/           # навыки по группам + образование/сертификаты
    languages/        # языки с прогресс-барами
    footer/           # CTA-блок "Контакты" + подвал с пасхалкой
  features/         # переиспользуемое поведение
    theme-toggle/     # переключение light/dark
    cursor-reveal/    # "кружок" под курсором, открывающий скрытый текст
  entities/         # данные предметной области
    resume/           # весь контент резюме (профиль, опыт, навыки, языки...)
    social-links/     # ссылки на соцсети (Telegram, GitHub, VK, email)
  shared/           # переиспользуемые кирпичики без бизнес-логики
    ui/               # Container, SectionTitle, Chip, SocialIcon, RevealOnScroll...
    lib/hooks/        # useTheme, useInView, useActiveSection
    config/           # константы (секции навигации, ключ темы в localStorage)
```

Весь текстовый контент резюме лежит в одном месте —
`src/entities/resume/model/data.ts` — и в `src/entities/social-links/model/data.ts`.
Чтобы обновить резюме на сайте, достаточно поменять данные там, вёрстку трогать не нужно.

## Деплой

Сайт задеплоен через **Vercel**: репозиторий подключён напрямую, каждый push в `main`
автоматически собирает и выкладывает новую версию (zero-config для Vite).

GitHub Actions (`.github/workflows/ci.yml`) на каждый push/PR прогоняет lint и
`tsc -b && vite build` — чисто проверка, без деплоя (деплоем занимается Vercel).

## Изображения и файлы

- `public/avatar.jpg` — фото профиля, кадрировано по лицу под круглый аватар
- `public/resume.pdf` — резюме в PDF для кнопки "Скачать резюме" в шапке
- `public/favicon.svg` — фавикон-монограмма "АБ"
