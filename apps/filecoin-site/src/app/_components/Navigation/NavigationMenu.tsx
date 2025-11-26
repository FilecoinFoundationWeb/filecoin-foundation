'use client'

import { useIsNavigationMenuActive } from '@filecoin-foundation/ui-filecoin/Navigation/hooks/useIsNavigationMenuActive'
import { NavigationMenu as SharedNavigationMenu } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMenu'
import { NavigationMenuPanel } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMenuPanel'
import type { NavigationMenuItem } from '@filecoin-foundation/ui-filecoin/Navigation/types'

export function NavigationMenu({ label, items }: NavigationMenuItem) {
  const isActive = useIsNavigationMenuActive(items)

  return (
    <SharedNavigationMenu as="li" label={label} isCurrent={isActive}>
      <NavigationMenuPanel items={items} />
    </SharedNavigationMenu>
  )
}
