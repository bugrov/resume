import { Container } from '@shared/ui/Container'
import { SocialIcon } from '@shared/ui/SocialIcon'
import { CursorReveal } from '@features/cursor-reveal/CursorReveal'
import { socialLinks } from '@entities/social-links/model/data'
import { profile } from '@entities/resume/model/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-violet-500/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <CursorReveal
          baseText={`© ${year} ${profile.fullName}. Все права защищены.`}
          revealText="Спасибо, что дочитали до конца! Жду ваш оффер 🚀"
          className="text-sm"
        />

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <SocialIcon key={link.id} link={link} size={16} />
          ))}
        </div>
      </Container>
    </footer>
  )
}
