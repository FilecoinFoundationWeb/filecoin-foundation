'use client'

import { clsx } from 'clsx'

import { NavigationMenu as SharedNavigationMenu } from '@filecoin-foundation/ui/NavigationMenu'

import type { ExpandedNavItem } from '@/constants/navigation'

import { desktopStyle } from './NavigationMainLink'
import { NavigationMenuPanel } from './NavigationMenuPanel'
import { useIsNavigationMenuActive } from './useIsNavigationMenuActive'

type MobileNavigationProps = ExpandedNavItem

export function NavigationMenu({ label, items }: MobileNavigationProps) {
  const isActive = useIsNavigationMenuActive(items)

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
