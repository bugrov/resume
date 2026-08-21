import { Languages as LanguagesIcon } from 'lucide-react'
import { Container } from '@shared/ui/Container'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { RevealOnScroll } from '@shared/ui/RevealOnScroll'
import { useInView } from '@shared/lib/hooks/useInView'
import { useLocale } from '@shared/i18n/useLocale'
import type { LanguageItemT } from '@shared/i18n/types'

function LanguageBar({ name, level, percent }: LanguageItemT) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className="surface-card rounded-2xl p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-[var(--fg)]">{name}</h3>
        <span className="text-sm text-[var(--fg-muted)]">{level}</span>
      </div>
      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-violet-500/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-400 to-sky-400 transition-[width] duration-[1200ms] ease-out"
          style={{ width: inView ? `${percent}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export function Languages() {
  const { t } = useLocale()

  return (
    <section id="languages" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <SectionTitle eyebrow={t.languages.eyebrow} title={t.languages.title} />
        <div className="-mt-6 mb-10 flex items-center gap-2 text-sm text-[var(--fg-muted)]">
          <LanguagesIcon size={16} className="text-violet-500" />
          {t.languages.note}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {t.languages.items.map((language, index) => (
            <RevealOnScroll key={language.id} delay={index * 100}>
              <LanguageBar {...language} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
