import { useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { dictionaries } from './dictionaries'
import type { Locale } from './types'
import { LocaleContext, type LocaleContextValue } from './context'
import { LOCALE_STORAGE_KEY } from '@shared/config/constants'

function isLocale(value: string | null): value is Locale {
  return value === 'ru' || value === 'en' || value === 'ja'
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'ru'
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  return isLocale(stored) ? stored : 'ru'
}

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const t = dictionaries[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)

    document.title = t.meta.title
    setMeta('meta[name="description"]', t.meta.description)
    setMeta('meta[property="og:title"]', t.meta.title)
    setMeta('meta[property="og:description"]', t.meta.description)
  }, [locale, t])

  const value = useMemo<LocaleContextValue>(() => ({ locale, setLocale, t }), [locale, t])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
