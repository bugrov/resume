import { Briefcase, Calendar } from 'lucide-react'
import { Container } from '@shared/ui/Container'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { RevealOnScroll } from '@shared/ui/RevealOnScroll'
import { useLocale } from '@shared/i18n/useLocale'

export function Experience() {
  const { t } = useLocale()

  return (
    <section id="experience" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative flex flex-col gap-8">
          <div
            className="absolute top-2 bottom-2 left-[19px] hidden w-px bg-gradient-to-b from-violet-500/60 via-violet-400/20 to-transparent sm:block"
            aria-hidden="true"
          />

          {t.experience.items.map((job, index) => (
            <RevealOnScroll key={job.id} delay={index * 120}>
              <article className="surface-card relative rounded-2xl p-6 sm:pl-16">
                <span
                  className="absolute top-6 left-6 hidden h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white ring-4 ring-[var(--bg)] sm:flex"
                  aria-hidden="true"
                >
                  <Briefcase size={12} />
                </span>

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--fg)]">{job.role}</h3>
                    <p className="mt-1 text-sm font-medium text-violet-600 dark:text-violet-300">
                      {job.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-[var(--fg-muted)]">
                    <Calendar size={13} />
                    {job.period} · {job.duration}
                  </div>
                </div>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--fg-muted)] sm:text-[15px]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
