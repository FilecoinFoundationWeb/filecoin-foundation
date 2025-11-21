'use client'

import {
  NavigationMainLink as SharedNavigationMainLink,
  type NavigationLinkProps as SharedNavigationLinkProps,
} from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMainLink'

import { SmartTextLink } from '../TextLink/SmartTextLink'

export {
  desktopStyle,
  mobileStyle,
} from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMainLink'

type NavigationLinkProps = Omit<SharedNavigationLinkProps, 'SmartLinkComponent'>

export function NavigationMainLink(props: NavigationLinkProps) {
  return (
    <SharedNavigationMainLink SmartLinkComponent={SmartTextLink} {...props} />
  )
}
