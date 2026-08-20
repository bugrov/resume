import type { CSSProperties, PropsWithChildren } from 'react'
import { useInView } from '@shared/lib/hooks/useInView'

interface RevealOnScrollProps {
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'article'
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: PropsWithChildren<RevealOnScrollProps>) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const style = { transitionDelay: `${delay}ms` } as CSSProperties

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`reveal ${inView ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
