import { useRef } from 'react'
import type { PointerEvent, ReactNode } from 'react'

interface FooterSpotlightProps {
  children: ReactNode
  className?: string
}

const TOUCH_HIDE_DELAY = 1800

export function FooterSpotlight({ children, className = '' }: FooterSpotlightProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const updatePositions = (clientX: number, clientY: number) => {
    const wrap = wrapRef.current
    const blob = blobRef.current
    if (!wrap || !blob) return

    const wrapRect = wrap.getBoundingClientRect()
    const x = clientX - wrapRect.left
    const y = clientY - wrapRect.top
    blob.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`

    const targets = wrap.querySelectorAll<HTMLElement>('[data-reveal-target]')
    targets.forEach((target) => {
      const targetRect = target.getBoundingClientRect()
      target.style.setProperty('--reveal-x', `${clientX - targetRect.left}px`)
      target.style.setProperty('--reveal-y', `${clientY - targetRect.top}px`)
    })
  }

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    updatePositions(event.clientX, event.clientY)
  }

  const handleEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current)
    blobRef.current?.classList.add('footer-blob--visible')
  }

  const handleLeave = () => {
    blobRef.current?.classList.remove('footer-blob--visible')
  }

  const handleTouch = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'touch') return
    updatePositions(event.clientX, event.clientY)
    handleEnter()
    if (hideTimeout.current) clearTimeout(hideTimeout.current)
    hideTimeout.current = setTimeout(handleLeave, TOUCH_HIDE_DELAY)
  }

  return (
    <div
      ref={wrapRef}
      className={`relative ${className}`}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      onPointerDown={handleTouch}
    >
      <div ref={blobRef} className="footer-blob" aria-hidden="true" />
      {children}
    </div>
  )
}
