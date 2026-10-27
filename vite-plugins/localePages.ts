import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import { SEO_META } from '../src/shared/i18n/meta.ts'

type Locale = keyof typeof SEO_META

const DEFAULT_SITE_URL = 'https://resume-bice-iota.vercel.app'
const OG_LOCALE: Record<Locale, string> = { ru: 'ru_RU', en: 'en_US', ja: 'ja_JP' }
const LOCALES = Object.keys(SEO_META) as Locale[]

const pathFor = (locale: Locale) => (locale === 'ru' ? '/' : `/${locale}`)

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Заменяет ровно один фрагмент и падает, если его нет: так сборка сразу покажет,
// что index.html разошёлся с ожиданиями плагина, а не отдаст молча русские метатеги на /en.
function replaceOnce(html: string, pattern: RegExp, replacement: string): string {
  if (!pattern.test(html)) throw new Error(`[locale-pages] pattern not found in index.html: ${pattern}`)
  return html.replace(pattern, () => replacement)
}

function renderPage(source: string, locale: Locale, siteUrl: string): string {
  const { title, description } = SEO_META[locale]
  const url = `${siteUrl}${pathFor(locale)}`
  const metaTag = (attr: 'name' | 'property', key: string, content: string) =>
    `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`

  const seoBlock = [
    `<link rel="canonical" href="${url}" />`,
    ...LOCALES.map((code) => `<link rel="alternate" hreflang="${code}" href="${siteUrl}${pathFor(code)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`,
    metaTag('property', 'og:url', url),
    metaTag('property', 'og:locale', OG_LOCALE[locale]),
    ...LOCALES.filter((code) => code !== locale).map((code) =>
      metaTag('property', 'og:locale:alternate', OG_LOCALE[code]),
    ),
  ].join('\n    ')

  let html = source
  html = replaceOnce(html, /<html lang="[^"]*"/, `<html lang="${locale}"`)
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
  html = replaceOnce(html, /<meta\s+name="description"[\s\S]*?\/>/, metaTag('name', 'description', description))
  html = replaceOnce(html, /<meta\s+property="og:title"[\s\S]*?\/>/, metaTag('property', 'og:title', title))
  html = replaceOnce(
    html,
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    metaTag('property', 'og:description', description),
  )
  // Превью-боты не всегда резолвят относительные пути — og:image делаем абсолютным.
  html = replaceOnce(html, /<meta\s+property="og:image"[\s\S]*?\/>/, metaTag('property', 'og:image', `${siteUrl}/avatar.jpg`))
  html = replaceOnce(html, /<!--locale-seo-->/, seoBlock)
  return html
}

export function localePages(): Plugin {
  let outDir = ''

  return {
    name: 'locale-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const siteUrl = (process.env.SITE_URL ?? DEFAULT_SITE_URL).replace(/\/+$/, '')
      const source = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')

      for (const locale of LOCALES) {
        const target = path.join(outDir, locale === 'ru' ? 'index.html' : path.join(locale, 'index.html'))
        fs.mkdirSync(path.dirname(target), { recursive: true })
        fs.writeFileSync(target, renderPage(source, locale, siteUrl))
      }
    },
  }
}
