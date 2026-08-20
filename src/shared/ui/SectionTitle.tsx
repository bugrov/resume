interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ eyebrow, title, description, align = 'left' }: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`mb-8 flex flex-col gap-3 sm:mb-10 ${alignment}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
        <span className="h-px w-6 bg-violet-500/70" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-white">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
    </div>
  )
}
