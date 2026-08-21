import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from '@shared/ui/Container'
import { SocialIcon } from '@shared/ui/SocialIcon'
import { ThemeToggle } from '@features/theme-toggle/ThemeToggle'
import { LocaleSwitch } from '@features/locale-switch/LocaleSwitch'
import { NAV_SECTION_IDS } from '@shared/config/constants'
import { useActiveSection } from '@shared/lib/hooks/useActiveSection'
import { useLocale } from '@shared/i18n/useLocale'
import { socialLinks } from '@entities/social-links/model/data'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLocale()
  const activeId = useActiveSection([...NAV_SECTION_IDS])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navItems = NAV_SECTION_IDS.map((id) => ({ id, label: t.nav[id] }))

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-violet-500/15 bg-[var(--bg)]/80 backdrop-blur-lg'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#hero"
          aria-label={t.a11y.backToTop}
          className="group flex shrink-0 cursor-pointer items-center"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-400 to-sky-400 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(124,58,237,0.65)] transition-transform duration-300 group-hover:scale-105">
            АБ
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-violet-500/10 bg-white/40 px-1.5 py-1.5 backdrop-blur-sm lg:flex dark:bg-white/[0.03]">
          {navItems.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeId === section.id
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-[var(--fg-muted)] hover:text-violet-600 dark:hover:text-violet-300'
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 md:flex">
            {socialLinks.map((link) => (
              <SocialIcon key={link.id} link={link} size={16} />
            ))}
          </div>

          <LocaleSwitch />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-violet-500/20 text-[var(--fg)] lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="border-t border-violet-500/10 bg-[var(--bg)]/95 backdrop-blur-lg lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className={`cursor-pointer rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  activeId === section.id
                    ? 'bg-violet-600 text-white'
                    : 'text-[var(--fg-muted)] hover:bg-violet-500/10'
                }`}
              >
                {section.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-2 px-4">
              {socialLinks.map((link) => (
                <SocialIcon key={link.id} link={link} size={16} />
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
