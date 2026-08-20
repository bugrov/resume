import type { ElementType, PropsWithChildren } from 'react'

interface ContainerProps {
  className?: string
  as?: ElementType
}

export function Container({ children, className = '', as: Tag = 'div' }: PropsWithChildren<ContainerProps>) {
  return <Tag className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 ${className}`}>{children}</Tag>
}
