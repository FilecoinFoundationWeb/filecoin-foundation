import { type ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import { textColorStyles } from '@/styles/theme'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps<T extends HeadingTag = HeadingTag> = {
  tag: T
  variant: '6xl-medium' | '5xl-medium' | 'xl-medium' | 'xl-regular'
  backgroundVariant: 'light' | 'dark'
  children: string
} & Omit<ComponentPropsWithoutRef<T>, 'children'>

const variantStyles = {
  '6xl-medium': 'text-6xl font-medium',
  '5xl-medium': 'text-5xl font-medium',
  'xl-medium': 'text-xl font-medium',
  'xl-regular': 'text-xl font-normal',
}

export function Heading({
  tag,
  variant,
  backgroundVariant,
  className,
  children,
}: HeadingProps) {
  const Tag = tag

  const combinedClassName = clsx(
    variantStyles[variant],
    textColorStyles[backgroundVariant],
    className,
  )

  return <Tag className={combinedClassName}>{children}</Tag>
}
