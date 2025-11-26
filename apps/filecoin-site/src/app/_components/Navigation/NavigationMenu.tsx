'use client'

import { useIsNavigationMenuActive } from '@filecoin-foundation/ui-filecoin/Navigation/hooks/useIsNavigationMenuActive'
import { NavigationMenu as SharedNavigationMenu } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMenu'
import { NavigationMenuPanel } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMenuPanel'
import type { NavigationMenuItem } from '@filecoin-foundation/ui-filecoin/Navigation/types'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export function NavigationMenu({ label, items }: NavigationMenuItem) {
  // Fix this: no need to pass the base domain to the hook
  const isActive = useIsNavigationMenuActive({ items, baseDomain: BASE_DOMAIN })

  return (
    <SharedNavigationMenu as="li" label={label} isCurrent={isActive}>
      <NavigationMenuPanel items={items} />
    </SharedNavigationMenu>
  )
}
