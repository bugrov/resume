import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@shared/lib/hooks/useTheme'
import { useLocale } from '@shared/i18n/useLocale'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLocale()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.theme.toLight : t.theme.toDark}
      title={isDark ? t.theme.toLight : t.theme.toDark}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/20 bg-white/60 text-zinc-600 transition-all duration-300 hover:border-violet-500/60 hover:text-violet-600 dark:border-violet-400/15 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-violet-300"
    >
      <Sun
        size={18}
        className={`absolute transition-all duration-300 ${isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
      />
      <Moon
        size={18}
        className={`absolute transition-all duration-300 ${isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}`}
      />
    </button>
  )
}
