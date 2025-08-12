import { type ComponentPropsWithoutRef } from 'react'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps<T extends HeadingTag = HeadingTag> = {
  tag: T
  children: string
} & Omit<ComponentPropsWithoutRef<T>, 'children'>

export function Heading({ tag: Tag, ...rest }: HeadingProps) {
  return <Tag {...rest} />
}
