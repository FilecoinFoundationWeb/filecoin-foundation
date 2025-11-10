'use client'

import { clsx } from 'clsx'

import { NavigationMenu as SharedNavigationMenu } from '@filecoin-foundation/filecoin-ui/Navigation/NavigationMenu'
import { NavigationMenuPanel } from '@filecoin-foundation/filecoin-ui/Navigation/NavigationMenuPanel'

import type { NavigationMenuItem } from '../constants/navigation'
import { useIsNavigationMenuActive } from '../hooks/useIsNavigationMenuActive'
import { desktopStyle } from '../NavigationMainLink'

import { NavigationMenuLink } from './NavigationMenuLink'

export function NavigationMenu({ label, items }: NavigationMenuItem) {
  const isActive = useIsNavigationMenuActive(items)

  return (
    <SharedNavigationMenu
      key={label}
      as="li"
      label={label}
      isCurrent={isActive}
      labelClassName={clsx(desktopStyle, 'inline-flex items-center gap-2')}
    >
      <NavigationMenuPanel
        items={items}
        NavigationMenuLinkComponent={NavigationMenuLink}
      />
    </SharedNavigationMenu>
  )
}
