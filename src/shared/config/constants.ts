export const NAV_SECTION_IDS = ['hero', 'stack', 'experience', 'skills', 'languages', 'contact'] as const

export type NavSectionId = (typeof NAV_SECTION_IDS)[number]

export const THEME_STORAGE_KEY = 'resume-theme'
export const LOCALE_STORAGE_KEY = 'resume-locale'
