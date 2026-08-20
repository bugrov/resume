import { Container } from '@shared/ui/Container'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { Advantages } from './Advantages'
import { StackCarousel } from './StackCarousel'

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Почему я"
          title="Преимущества и стек"
          description="Коротко о том, чем я полезен в команде — и с какими технологиями работаю каждый день."
        />
        <Advantages />

        <div className="mt-12">
          <h3 className="mb-6 font-display text-xl font-semibold text-[var(--fg)]">
            Технологии в работе
          </h3>
          <StackCarousel />
        </div>
      </Container>
    </section>
  )
}
