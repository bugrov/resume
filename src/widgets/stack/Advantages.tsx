import { useLocale } from '@shared/i18n/useLocale'
import { getIcon } from '@shared/lib/iconMap'
import { RevealOnScroll } from '@shared/ui/RevealOnScroll'

export function Advantages() {
  const { t } = useLocale()

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {t.advantages.map((item, index) => {
        const Icon = getIcon(item.icon)
        return (
          <RevealOnScroll key={item.id} delay={index * 90}>
            <div className="surface-card group h-full rounded-2xl p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-fuchsia-400/15 text-violet-600 transition-transform duration-300 group-hover:scale-110 group-hover:from-violet-500 group-hover:to-fuchsia-500 group-hover:text-white dark:text-violet-300">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-[var(--fg)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{item.description}</p>
            </div>
          </RevealOnScroll>
        )
      })}
    </div>
  )
}
