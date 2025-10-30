'use client'

import { clsx } from 'clsx'

import { NavigationMenu as SharedNavigationMenu } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMenu'

import type { NavigationMenuItem } from '../constants/navigation'
import { useIsNavigationMenuActive } from '../hooks/useIsNavigationMenuActive'
import { desktopStyle } from '../NavigationMainLink'

import { NavigationMenuPanel } from './NavigationMenuPanel'

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
      <NavigationMenuPanel items={items} />
    </SharedNavigationMenu>
  )
}
