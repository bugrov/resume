import { SiGithub, SiTelegram, SiVk } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import type { IconType } from 'react-icons'
import type { SocialLink } from '@entities/social-links/model/data'
import { useLocale } from '@shared/i18n/useLocale'

const ICON_MAP: Record<string, IconType> = {
  telegram: SiTelegram,
  github: SiGithub,
  vk: SiVk,
  email: HiOutlineMail,
}

interface SocialIconProps {
  link: SocialLink
  size?: number
  className?: string
}

export function SocialIcon({ link, size = 18, className = '' }: SocialIconProps) {
  const { t } = useLocale()
  const Icon = ICON_MAP[link.id] ?? SiGithub
  const label = t.social[link.id as keyof typeof t.social] ?? link.label

  return (
    <a
      href={link.href}
      target={link.id === 'email' ? undefined : '_blank'}
      rel="noreferrer noopener"
      aria-label={label}
      title={link.handle}
      className={`social-icon group inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/20 bg-white/60 text-zinc-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/60 hover:text-violet-600 hover:shadow-[0_8px_24px_-8px_rgba(124,58,237,0.45)] dark:border-violet-400/15 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-violet-300 ${className}`}
    >
      <Icon size={size} />
    </a>
  )
}
