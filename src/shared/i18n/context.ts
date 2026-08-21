import { createContext } from 'react'
import type { Dictionary, Locale } from './types'

export const LOCALES: Locale[] = ['ru', 'en', 'ja']

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
