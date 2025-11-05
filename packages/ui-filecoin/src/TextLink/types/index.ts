import type { ComponentProps, ComponentType } from 'react'

import Link from 'next/link'

type LinkProps = ComponentProps<typeof Link>

export type GenericLinkProps = Omit<LinkProps, 'locale' | 'href'> & {
  href: string
}

export type GenericLinkType = ComponentType<GenericLinkProps>
