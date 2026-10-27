import { useCallback, useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { dictionaries } from './dictionaries'
import type { Locale } from './types'
import { LocaleContext, type LocaleContextValue } from './context'
import { isRootPath, localeFromPath, pathForLocale, resolveLocale, storeLocale, syncLocaleUrl } from './routing'

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<Locale>(resolveLocale)
  const t = dictionaries[locale]

  // Явный выбор пользователя: запоминаем, меняем адрес (новая запись в истории) и язык.
  const setLocale = useCallback((next: Locale) => {
    storeLocale(next)
    syncLocaleUrl(next, 'push')
    setLocaleState(next)
  }, [])

  // При заходе приводим адрес к каноничному виду (/jp → /ja, ?lang=en → /en, / → /en по языку браузера).
  // replace, а не push — иначе кнопка "назад" возвращала бы на исходный адрес и снова редиректила.
  // После клика в переключателе или popstate адрес уже совпадает, поэтому дальше это no-op.
  useEffect(() => {
    syncLocaleUrl(locale, 'replace')
  }, [locale])

  // Кнопки "назад/вперёд": язык берём из адреса. Корень (/) — это всегда русский,
  // потому что любой другой язык мы выносим на свой путь.
  useEffect(() => {
    const onPopState = () => {
      const { pathname } = window.location
      const next = localeFromPath(pathname) ?? (isRootPath(pathname) ? 'ru' : null)
      if (next) setLocaleState(next)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale

    document.title = t.meta.title
    setMeta('meta[name="description"]', t.meta.description)
    setMeta('meta[property="og:title"]', t.meta.title)
    setMeta('meta[property="og:description"]', t.meta.description)

    const url = `${window.location.origin}${pathForLocale(locale)}`
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
    setMeta('meta[property="og:url"]', url)
  }, [locale, t])

  const value = useMemo<LocaleContextValue>(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
