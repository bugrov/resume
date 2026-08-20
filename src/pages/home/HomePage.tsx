import { Header } from '@widgets/header/Header'
import { Hero } from '@widgets/hero/Hero'
import { StackSection } from '@widgets/stack/StackSection'
import { Experience } from '@widgets/experience/Experience'
import { Skills } from '@widgets/skills/Skills'
import { Languages } from '@widgets/languages/Languages'
import { ContactCta } from '@widgets/footer/ContactCta'
import { Footer } from '@widgets/footer/Footer'

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Header />
      <main>
        <Hero />
        <StackSection />
        <Experience />
        <Skills />
        <Languages />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
