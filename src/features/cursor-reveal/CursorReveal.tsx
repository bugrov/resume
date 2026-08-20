import { useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { Sparkles } from 'lucide-react'

interface CursorRevealProps {
  baseText: string
  revealText: string
  className?: string
}

export function CursorReveal({ baseText, revealText, className = '' }: CursorRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  const updatePosition = (event: PointerEvent<HTMLDivElement>) => {
    const node = containerRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    node.style.setProperty('--reveal-x', `${x}px`)
    node.style.setProperty('--reveal-y', `${y}px`)
  }

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    updatePosition(event)
    if (event.pointerType !== 'touch') setActive(true)
  }

  const handleLeave = () => setActive(false)

  const handleTap = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') {
      updatePosition(event)
      setActive((prev) => !prev)
    }
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handleMove}
      onPointerEnter={handleMove}
      onPointerLeave={handleLeave}
      onPointerDown={handleTap}
      className={`cursor-reveal group ${active ? 'cursor-reveal--active' : ''} ${className}`}
    >
      <Sparkles
        size={14}
        className="cursor-reveal__spark shrink-0 text-violet-400 opacity-70 transition-transform duration-300 group-hover:rotate-45 group-hover:opacity-100"
        aria-hidden="true"
      />
      <span className="relative inline-grid">
        <span className="cursor-reveal__base col-start-1 row-start-1">{baseText}</span>
        <span
          className={`cursor-reveal__hidden col-start-1 row-start-1 ${active ? 'cursor-reveal__hidden--active' : ''}`}
          aria-hidden="true"
        >
          {revealText}
        </span>
      </span>
      <span className="sr-only">{revealText}</span>
    </div>
  )
}
