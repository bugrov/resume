import { Languages as LanguagesIcon } from 'lucide-react'
import { Container } from '@shared/ui/Container'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { RevealOnScroll } from '@shared/ui/RevealOnScroll'
import { useInView } from '@shared/lib/hooks/useInView'
import { languages } from '@entities/resume/model/data'

function LanguageBar({ name, level, percent }: (typeof languages)[number]) {
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
  return (
    <section id="languages" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <SectionTitle eyebrow="Языки" title="Языки общения" />
        <div className="-mt-6 mb-10 flex items-center gap-2 text-sm text-[var(--fg-muted)]">
          <LanguagesIcon size={16} className="text-violet-500" />
          Русский, английский для чтения документации и общения с командой, японский — в процессе изучения.
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {languages.map((language, index) => (
            <RevealOnScroll key={language.id} delay={index * 100}>
              <LanguageBar {...language} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
