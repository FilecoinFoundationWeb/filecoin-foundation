import { clsx } from 'clsx'

export type KickerProps = {
  children: string | Array<string>
  size?: 'sm' | 'md'
}

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-base',
}

export function Kicker({ children, size = 'md' }: KickerProps) {
  const combinedClassName = clsx(
    'font-mono text-base capitalize',
    sizeStyles[size],
  )

  if (Array.isArray(children)) {
    return (
      <div className="flex flex-wrap gap-4">
        {children.map((kicker, index) => (
          <span key={index} className={combinedClassName}>
            {kicker}
          </span>
        ))}
      </div>
    )
  }

  return <span className={combinedClassName}>{children}</span>
}
