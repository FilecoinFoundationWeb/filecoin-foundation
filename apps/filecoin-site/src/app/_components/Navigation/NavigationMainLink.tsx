'use client'

import { Link } from '@/i18n/navigation'

import {
  NavigationMainLink as SharedNavigationMainLink,
  type NavigationLinkProps as SharedNavigationLinkProps,
} from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMainLink'

export {
  desktopStyle,
  mobileStyle,
} from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMainLink'

type NavigationLinkProps = Omit<
  SharedNavigationLinkProps,
  'InternalLinkComponent'
>

export function NavigationMainLink(props: NavigationLinkProps) {
  return <SharedNavigationMainLink InternalLinkComponent={Link} {...props} />
}
