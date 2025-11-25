'use client'

import { clsx } from 'clsx'

import { useIsNavigationMenuActive } from '@filecoin-foundation/ui-filecoin/Navigation/hooks/useIsNavigationMenuActive'
import { desktopStyle } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMainLink'
import { NavigationMenu as SharedNavigationMenu } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMenu'
import { NavigationMenuPanel } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMenuPanel'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import type { NavigationMenuItem } from '../constants/navigation'

export function NavigationMenu({ label, items }: NavigationMenuItem) {
  const isActive = useIsNavigationMenuActive({ items, baseDomain: BASE_DOMAIN })

  return (
    <SharedNavigationMenu
      key={label}
      as="li"
      label={label}
      isCurrent={isActive}
      labelClassName={clsx(desktopStyle, 'inline-flex items-center gap-2')}
    >
      <NavigationMenuPanel items={items} />
    </SharedNavigationMenu>
  )
}
