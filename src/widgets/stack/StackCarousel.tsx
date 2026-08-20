import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { stackItems } from '@entities/resume/model/data'
import { getIcon } from '@shared/lib/iconMap'

export function StackCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCards = (direction: 1 | -1) => {
    const node = trackRef.current
    if (!node) return
    const card = node.querySelector<HTMLElement>('.carousel-item')
    const step = (card?.offsetWidth ?? 280) + 16
    node.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="carousel-track flex gap-4 overflow-x-auto scroll-pl-1 pb-4"
      >
        {stackItems.map((item) => {
          const Icon = getIcon(item.icon)
          return (
            <div
              key={item.id}
              className="carousel-item surface-card w-[260px] shrink-0 rounded-2xl p-5 sm:w-[280px]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                <Icon size={18} />
              </div>
              <h3 className="font-display text-base font-semibold text-[var(--fg)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{item.description}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          aria-label="Прокрутить назад"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/20 text-[var(--fg-muted)] transition-colors hover:border-violet-500/60 hover:text-violet-600 dark:hover:text-violet-300"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          aria-label="Прокрутить вперёд"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/20 text-[var(--fg-muted)] transition-colors hover:border-violet-500/60 hover:text-violet-600 dark:hover:text-violet-300"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
