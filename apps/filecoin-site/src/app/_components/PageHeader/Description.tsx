import { clsx } from 'clsx'

import { textColorStyles, type BackgroundVariant } from '@/styles/theme'

export type DescriptionProps = {
  children: React.ReactNode
  backgroundVariant: BackgroundVariant
}

export function Description({ backgroundVariant, children }: DescriptionProps) {
  const combinedClassName = clsx(textColorStyles[backgroundVariant])

  return <p className={combinedClassName}>{children}</p>
}
