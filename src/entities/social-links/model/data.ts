export interface SocialLink {
  id: string
  label: string
  href: string
  handle: string
}

export const socialLinks: SocialLink[] = [
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/bugrov_alexander',
    handle: '@bugrov_alexander',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/bugrov',
    handle: 'github.com/bugrov',
  },
  {
    id: 'vk',
    label: 'VK',
    href: 'https://vk.ru/id136200162',
    handle: 'vk.ru/id136200162',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:alex.bugrov.bugrov@yandex.ru',
    handle: 'alex.bugrov.bugrov@yandex.ru',
  },
]
