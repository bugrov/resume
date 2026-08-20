import { Container } from '@shared/ui/Container'
import { SocialIcon } from '@shared/ui/SocialIcon'
import { FooterSpotlight } from '@features/cursor-reveal/FooterSpotlight'
import { SecretText } from '@features/cursor-reveal/SecretText'
import { socialLinks } from '@entities/social-links/model/data'
import { profile } from '@entities/resume/model/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-violet-500/10">
      <FooterSpotlight className="overflow-hidden py-8">
        <Container className="relative z-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <span className="text-sm text-[var(--fg-muted)]">
            © {year} {profile.fullName}
          </span>

          <SecretText revealText="Спасибо, что дочитали до конца! Жду ваш оффер 🚀" />

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <SocialIcon key={link.id} link={link} size={16} />
            ))}
          </div>
        </Container>
      </FooterSpotlight>
    </footer>
  )
}
