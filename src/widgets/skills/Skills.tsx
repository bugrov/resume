import { GraduationCap, ShieldCheck } from 'lucide-react'
import { Container } from '@shared/ui/Container'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { Chip } from '@shared/ui/Chip'
import { RevealOnScroll } from '@shared/ui/RevealOnScroll'
import { useLocale } from '@shared/i18n/useLocale'

export function Skills() {
  const { t } = useLocale()

  return (
    <section id="skills" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {t.skills.groups.map((group, index) => (
            <RevealOnScroll key={group.id} delay={index * 90}>
              <div className="surface-card h-full rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--fg)]">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <RevealOnScroll>
            <div className="surface-card flex h-full flex-col rounded-2xl p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                <GraduationCap size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-[var(--fg)]">{t.skills.educationTitle}</h3>
              <p className="mt-2 text-sm font-medium text-[var(--fg)]">{t.education.institution}</p>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">
                {t.education.faculty} · {t.education.speciality}
              </p>
              <p className="mt-2 text-xs text-[var(--fg-muted)]">{t.education.period}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={90}>
            <div className="surface-card flex h-full flex-col rounded-2xl p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                <ShieldCheck size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-[var(--fg)]">{t.skills.certificatesTitle}</h3>
              <ul className="mt-2 flex flex-col gap-1.5">
                {t.certificates.map((cert) => (
                  <li key={cert.id} className="flex items-center justify-between text-sm">
                    <span className="text-[var(--fg)]">{cert.title}</span>
                    <span className="text-[var(--fg-muted)]">
                      {cert.issuer} · {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  )
}
