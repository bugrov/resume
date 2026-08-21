import type { Dictionary, Locale } from '../types'
import { ru } from './ru'
import { en } from './en'
import { ja } from './ja'

export const dictionaries: Record<Locale, Dictionary> = { ru, en, ja }
