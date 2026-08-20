interface SecretTextProps {
  revealText: string
  hint?: string
  className?: string
}

export function SecretText({ revealText, hint = '✦', className = '' }: SecretTextProps) {
  return (
    <span className={`secret-text ${className}`}>
      <span className="secret-text__hint" aria-hidden="true">
        {hint}
      </span>
      <span data-reveal-target className="secret-text__hidden" aria-hidden="true">
        {revealText}
      </span>
      <span className="sr-only">{revealText}</span>
    </span>
  )
}
