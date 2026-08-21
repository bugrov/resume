import { Mail, Send } from 'lucide-react'
import { Container } from '@shared/ui/Container'
import { RevealOnScroll } from '@shared/ui/RevealOnScroll'
import { useLocale } from '@shared/i18n/useLocale'
import { socialLinks } from '@entities/social-links/model/data'

const telegramLink = socialLinks.find((link) => link.id === 'telegram')!
const emailLink = socialLinks.find((link) => link.id === 'email')!

export function ContactCta() {
  const { t } = useLocale()

  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-violet-500 to-fuchsia-500 px-6 py-14 text-center sm:px-14 sm:py-20">
            <div
              className="blob top-[-4rem] left-[-4rem] h-64 w-64 bg-white/20"
              aria-hidden="true"
            />
            <div
              className="blob right-[-3rem] bottom-[-4rem] h-72 w-72 bg-sky-300/25"
              aria-hidden="true"
              style={{ animationDelay: '-8s' }}
            />

            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-violet-100 sm:text-lg">
                {t.contact.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={telegramLink.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-lg transition-transform duration-300 hover:scale-[1.03]"
                >
                  <Send size={16} />
                  {t.contact.ctaTelegram}
                </a>
                <a
                  href={emailLink.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
                >
                  <Mail size={16} />
                  {emailLink.handle}
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}
