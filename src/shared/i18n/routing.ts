import { LOCALE_STORAGE_KEY } from '@shared/config/constants'
import { LOCALES } from './context'
import type { Locale } from './types'

// /jp и ?lang=jp принимаем как синоним ja (в переключателе язык подписан "JP").
const ALIAS_TO_LOCALE = new Map<string, Locale>([
  ['ru', 'ru'],
  ['en', 'en'],
  ['ja', 'ja'],
  ['jp', 'ja'],
])

const BROWSER_LANG_TO_LOCALE = new Map<string, Locale>([
  ['ru', 'ru'],
  ['en', 'en'],
  ['ja', 'ja'],
])

function isLocale(value: string | null): value is Locale {
  return LOCALES.includes(value as Locale)
}

function pathSegments(pathname: string): string[] {
  return pathname.split('/').filter(Boolean)
}

/** `/en`, `/ja`, `/jp`, `/ru` (с хвостовым слэшем или без) → язык; всё остальное → null. */
export function localeFromPath(pathname: string): Locale | null {
  const segments = pathSegments(pathname)
  if (segments.length !== 1) return null
  return ALIAS_TO_LOCALE.get(segments[0].toLowerCase()) ?? null
}

export function isRootPath(pathname: string): boolean {
  return pathSegments(pathname).length === 0
}

function localeFromQuery(search: string): Locale | null {
  const value = new URLSearchParams(search).get('lang')
  return value ? (ALIAS_TO_LOCALE.get(value.toLowerCase()) ?? null) : null
}

export function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return isLocale(stored) ? stored : null
  } catch {
    return null
  }
}

export function storeLocale(locale: Locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // localStorage может быть недоступен (приватный режим) — язык просто не запомнится
  }
}

/** Первый из языков браузера, который у нас есть; для всех остальных — английский. */
function detectBrowserLocale(): Locale {
  const tags = [...(navigator.languages ?? []), navigator.language].filter(Boolean)
  for (const tag of tags) {
    const locale = BROWSER_LANG_TO_LOCALE.get(tag.toLowerCase().split('-')[0])
    if (locale) return locale
  }
  return 'en'
}

/**
 * Приоритет: путь (/en) → ?lang= → сохранённый выбор → язык браузера.
 * Выбор в переключателе всегда выигрывает у автоопределения, но не у явной ссылки.
 */
export function resolveLocale(): Locale {
  const { pathname, search } = window.location
  return localeFromPath(pathname) ?? localeFromQuery(search) ?? readStoredLocale() ?? detectBrowserLocale()
}

/** Русский живёт на корне, остальные языки — на /en, /ja. */
export function pathForLocale(locale: Locale): string {
  return locale === 'ru' ? '/' : `/${locale}`
}

/**
 * Приводит адресную строку к каноничному виду для языка: меняет путь, убирает ?lang=,
 * сохраняет остальные query и #hash. Незнакомые пути (не / и не /<lang>) не трогаем.
 */
export function syncLocaleUrl(locale: Locale, mode: 'push' | 'replace') {
  const { pathname, search, hash } = window.location
  if (!isRootPath(pathname) && !localeFromPath(pathname)) return

  const params = new URLSearchParams(search)
  params.delete('lang')
  const query = params.toString()

  const target = `${pathForLocale(locale)}${query ? `?${query}` : ''}${hash}`
  if (target === `${pathname}${search}${hash}`) return

  if (mode === 'push') window.history.pushState(null, '', target)
  else window.history.replaceState(null, '', target)
}
