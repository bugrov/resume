import { ArrowUpRight, MapPin, Send, Sparkles } from 'lucide-react'
import { Container } from '@shared/ui/Container'
import { RevealOnScroll } from '@shared/ui/RevealOnScroll'
import { profile } from '@entities/resume/model/data'
import { socialLinks } from '@entities/social-links/model/data'

const telegramLink = socialLinks.find((link) => link.id === 'telegram')!

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        className="blob -top-32 -left-24 h-80 w-80 bg-violet-500/40 dark:bg-violet-600/30"
        aria-hidden="true"
      />
      <div
        className="blob top-10 right-[-6rem] h-96 w-96 bg-sky-400/30 dark:bg-sky-500/20"
        aria-hidden="true"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="blob bottom-[-6rem] left-1/3 h-72 w-72 bg-fuchsia-400/25 dark:bg-fuchsia-500/20"
        aria-hidden="true"
        style={{ animationDelay: '-11s' }}
      />

      <Container className="relative flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-14">
        <RevealOnScroll className="shrink-0">
          <div className="avatar-ring h-40 w-40 overflow-hidden rounded-full sm:h-48 sm:w-48 md:h-56 md:w-56">
            <img
              src="/avatar.jpg"
              alt="Александр Бугров"
              className="h-full w-full rounded-full object-cover"
              width={224}
              height={224}
            />
          </div>
        </RevealOnScroll>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <RevealOnScroll delay={80}>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-700 dark:text-violet-300">
              <Sparkles size={14} />
              Привет, я
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={140}>
            <h1 className="mt-4 font-display text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-shine">{profile.fullName}</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="mt-3 text-lg font-semibold text-[var(--fg)] sm:text-xl">
              {profile.role} · <span className="text-[var(--fg-muted)]">{profile.roleStack}</span>
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={260}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
              {profile.tagline}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={320}>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--fg-muted)] sm:text-base">
              {profile.taglineSecondary}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={380}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href={telegramLink.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_-14px_rgba(124,58,237,0.85)] transition-transform duration-300 hover:scale-[1.03]"
              >
                <Send size={16} />
                Написать в Telegram
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 px-6 py-3 text-sm font-semibold text-[var(--fg)] transition-colors duration-300 hover:border-violet-500/60 hover:text-violet-600 dark:hover:text-violet-300"
              >
                Смотреть опыт
                <ArrowUpRight size={16} />
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={440}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--fg-muted)] md:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-violet-500" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Открыт для новых предложений
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  )
}
