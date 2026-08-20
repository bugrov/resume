export interface NavSection {
  id: string
  label: string
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'hero', label: 'Обо мне' },
  { id: 'stack', label: 'Стек' },
  { id: 'experience', label: 'Опыт' },
  { id: 'skills', label: 'Навыки' },
  { id: 'languages', label: 'Языки' },
  { id: 'contact', label: 'Контакты' },
]

export const THEME_STORAGE_KEY = 'resume-theme'
