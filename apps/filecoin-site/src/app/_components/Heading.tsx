import { type ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps<T extends HeadingTag = HeadingTag> = {
  tag: T
  variant: keyof typeof variantStyles
  children: string
} & Omit<ComponentPropsWithoutRef<T>, 'children'>

const variantStyles = {
  '6xl-medium': 'text-6xl font-medium',
  '5xl-medium': 'text-5xl font-medium',
  '4xl-medium': 'text-4xl font-medium',
  '3xl-medium': 'text-3xl font-medium',
  'xl-medium': 'text-xl font-medium',
  'xl-regular': 'text-xl font-normal',
}

export function Heading({ tag, variant, className, children }: HeadingProps) {
  const Tag = tag
  const combinedClassName = clsx(variantStyles[variant], className)

  return <Tag className={combinedClassName}>{children}</Tag>
}
