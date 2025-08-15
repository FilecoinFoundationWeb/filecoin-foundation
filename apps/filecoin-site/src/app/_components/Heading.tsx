import { type ComponentPropsWithoutRef, type ElementType } from 'react'

import { clsx } from 'clsx'

type HeadingTag = Extract<ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>

type BaseHeadingProps<T extends HeadingTag = HeadingTag> = {
  tag: T
  children: string
} & Omit<ComponentPropsWithoutRef<T>, 'children' | 'className'>

type Variant = keyof typeof variants

export type HeadingProps<T extends HeadingTag = HeadingTag> =
  | (BaseHeadingProps<T> & { variant: Variant; className?: never })
  | (BaseHeadingProps<T> & { className: string; variant?: never })

const variants = {
  'card-heading': 'text-xl font-medium',
  'section-heading': 'text-3xl font-medium md:text-5xl md:leading-14',
} as const

export function Heading({ tag: Tag, variant, ...rest }: HeadingProps) {
  const className = variant ? variants[variant] : rest.className

  return (
    <Tag {...rest} className={clsx('font-heading text-balance', className)} />
  )
}
