import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { useLocale } from '@shared/i18n/useLocale'
import type { Locale } from '@shared/i18n/types'

const OPTIONS: { code: Locale; displayCode: string; label: string }[] = [
  { code: 'ru', displayCode: 'RU', label: 'Русский' },
  { code: 'en', displayCode: 'EN', label: 'English' },
  { code: 'ja', displayCode: 'JP', label: '日本語' },
]

export function LocaleSwitch() {
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onClick = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = OPTIONS.find((option) => option.code === locale) ?? OPTIONS[0]

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.a11y.localeSwitch}
        className="inline-flex h-10 items-center gap-1 rounded-full border border-violet-500/20 bg-white/60 px-3 text-sm font-medium text-zinc-600 transition-all duration-300 hover:border-violet-500/60 hover:text-violet-600 dark:border-violet-400/15 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-violet-300"
      >
        <span aria-hidden="true" className="text-xs font-semibold tracking-wide">
          {current.displayCode}
        </span>
        <ChevronDown
          size={13}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.a11y.localeSwitch}
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-violet-500/15 bg-[var(--surface)] py-1.5 shadow-[0_20px_40px_-16px_rgba(124,58,237,0.35)]"
        >
          {OPTIONS.map((option) => (
            <button
              key={option.code}
              type="button"
              role="option"
              aria-selected={option.code === locale}
              onClick={() => {
                setLocale(option.code)
                setOpen(false)
              }}
              className="flex w-full cursor-pointer items-center gap-2.5 px-3.5 py-2 text-sm text-[var(--fg)] transition-colors hover:bg-violet-500/10"
            >
              <span aria-hidden="true" className="w-6 text-xs font-semibold text-violet-500">
                {option.displayCode}
              </span>
              <span className="flex-1 text-left">{option.label}</span>
              {option.code === locale && <Check size={14} className="shrink-0 text-violet-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
