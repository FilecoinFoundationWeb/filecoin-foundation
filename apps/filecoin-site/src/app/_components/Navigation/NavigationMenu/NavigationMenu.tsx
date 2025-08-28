'use client'

import { clsx } from 'clsx'

import { NavigationMenu as SharedNavigationMenu } from '@filecoin-foundation/ui/NavigationMenu'

import { desktopStyle } from '../NavigationMainLink'
import { useIsNavigationMenuActive } from '../hooks/useIsNavigationMenuActive'

import { NavigationMenuPanel } from './NavigationMenuPanel'

import type { LabelledExpandedNavItems } from '@/_components/Navigation/constants/navigation'

export function NavigationMenu({ label, items }: LabelledExpandedNavItems) {
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
