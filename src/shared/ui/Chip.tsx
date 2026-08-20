import type { PropsWithChildren } from 'react'

export function Chip({ children }: PropsWithChildren) {
  return (
    <span className="chip inline-flex cursor-pointer items-center rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-3.5 py-1.5 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-700 dark:text-zinc-300 dark:hover:text-violet-300">
      {children}
    </span>
  )
}
