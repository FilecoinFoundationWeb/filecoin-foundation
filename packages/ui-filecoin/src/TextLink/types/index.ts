import type { ComponentProps, ComponentType } from 'react'

import Link from 'next/link'

export type GenericLinkProps = Omit<ComponentProps<typeof Link>, 'locale'>
export type GenericLinkType = ComponentType<GenericLinkProps>
