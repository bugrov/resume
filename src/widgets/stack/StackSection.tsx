import { Container } from '@shared/ui/Container'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { useLocale } from '@shared/i18n/useLocale'
import { Advantages } from './Advantages'
import { StackCarousel } from './StackCarousel'

export function StackSection() {
  const { t } = useLocale()

  return (
    <section id="stack" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow={t.stackSection.eyebrow}
          title={t.stackSection.title}
          description={t.stackSection.description}
        />
        <Advantages />

        <div className="mt-12">
          <h3 className="mb-6 font-display text-xl font-semibold text-[var(--fg)]">
            {t.stackSection.techTitle}
          </h3>
          <StackCarousel />
        </div>
      </Container>
    </section>
  )
}
