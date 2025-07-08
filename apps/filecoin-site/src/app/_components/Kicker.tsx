import { clsx } from 'clsx'

import type { BackgroundVariant } from '@/styles/theme'

export type KickerProps = {
  children: string | Array<string>
  backgroundVariant: BackgroundVariant
  size?: 'sm' | 'md'
}

const colorStyles = {
  light: 'text-zinc-800',
  dark: 'text-zinc-50',
}

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-base',
}

export function Kicker({
  children,
  backgroundVariant,
  size = 'md',
}: KickerProps) {
  const combinedClassName = clsx(
    'font-mono text-base capitalize',
    colorStyles[backgroundVariant],
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
