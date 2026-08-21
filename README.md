# Александр Бугров — резюме-визитка

Личный сайт-визитка (одностраничник) на основе резюме fullstack-разработчика.
Фиолетово-сиреневая палитра, светлая/тёмная тема, три языка (RU/EN/JA), плавная
навигация по блокам, адаптивная вёрстка (мобайл/планшет/десктоп) и пасхалка со
"спотлайтом" в футере.

## Стек

- **React 19 + TypeScript**, сборка через **Vite**
- **Tailwind CSS v4** (утилиты, тёмная тема через класс `dark`) + **SCSS** (кастомные
  анимации, градиентный текст, эффект "spotlight" в футере)
- Иконки: **lucide-react** (UI) + **react-icons/si** (Telegram, VK, GitHub)
- Шрифты: **Space Grotesk** (заголовки) + **Inter** (текст) + **JetBrains Mono**,
  подключены локально через `@fontsource-variable/*` (без внешних запросов к Google Fonts).
  Для японского текста отдельный шрифт не подключали — используется системный
  CJK-шрифт через стандартный font-fallback браузера
- Мультиязычность — собственный лёгкий i18n (без сторонних библиотек), словари
  в `src/shared/i18n/dictionaries/{ru,en,ja}.ts`, переключение мгновенное
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
    header/           # шапка: логотип, навигация, соцсети, переключатель темы/языка
    hero/             # приветствие, фото, тезисы
    stack/            # преимущества + карусель стека технологий
    experience/       # опыт работы (таймлайн)
    skills/           # навыки по группам + образование/сертификаты
    languages/        # языки с прогресс-барами
    footer/           # CTA-блок "Контакты" + подвал с пасхалкой
  features/         # переиспользуемое поведение
    theme-toggle/     # переключение light/dark
    locale-switch/    # переключение RU/EN/JA (дропдаун с флагами)
    cursor-reveal/    # футер-спотлайт, открывающий скрытый текст
  entities/         # данные предметной области
    social-links/     # ссылки на соцсети (Telegram, GitHub, VK, email)
  shared/           # переиспользуемые кирпичики без бизнес-логики
    i18n/             # словари RU/EN/JA, LocaleProvider, useLocale()
    ui/               # Container, SectionTitle, Chip, SocialIcon, RevealOnScroll...
    lib/hooks/        # useTheme, useInView, useActiveSection
    config/           # константы (id секций навигации, ключи localStorage)
```

Весь текстовый контент сайта (UI-строки и контент резюме) лежит в трёх словарях —
`src/shared/i18n/dictionaries/{ru,en,ja}.ts` — и в
`src/entities/social-links/model/data.ts` (контакты, не переводятся). Чтобы
обновить резюме на сайте, достаточно поменять данные там, вёрстку трогать не нужно.

## Деплой

Сайт задеплоен через **Vercel**: репозиторий подключён напрямую, каждый push в `main`
автоматически собирает и выкладывает новую версию (zero-config для Vite).

GitHub Actions (`.github/workflows/ci.yml`) на каждый push/PR прогоняет lint и
`tsc -b && vite build` — чисто проверка, без деплоя (деплоем занимается Vercel).

## Изображения и файлы

- `public/avatar.jpg` — фото профиля, кадрировано по лицу под круглый аватар
- `public/favicon.svg` — фавикон-монограмма "АБ"
