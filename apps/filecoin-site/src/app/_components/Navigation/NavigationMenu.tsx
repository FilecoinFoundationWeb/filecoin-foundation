'use client'

import { clsx } from 'clsx'

import { NavigationMenu as SharedNavigationMenu } from '@filecoin-foundation/ui/NavigationMenu'

import type { ExpandedNavItem } from '@/constants/navigation'

import { useBackgroundVariant } from '@/components/BackgroundVariantContext'
import { backgroundVariants } from '@/components/Section'

import { variantMapping } from './constants'
import { desktopStyle } from './NavigationMainLink'
import { NavigationMenuPanel } from './NavigationMenuPanel'
import { useIsNavigationMenuActive } from './useIsNavigationMenuActive'

const roundedStyle = 'rounded-xl'

type MobileNavigationProps = ExpandedNavItem

export function NavigationMenu({ label, items }: MobileNavigationProps) {
  const backgroundVariant = useBackgroundVariant()
  const isActive = useIsNavigationMenuActive(items)

  const desktopBackgroundVariant = variantMapping[backgroundVariant]

  return (
    <SharedNavigationMenu
      key={label}
      as="li"
      label={label}
      isCurrent={isActive}
      labelClassName={clsx(desktopStyle, 'inline-flex items-center gap-2')}
      panelClassName={clsx(
        roundedStyle,
        backgroundVariants[desktopBackgroundVariant],
      )}
    >
      <div
        className={clsx(
          roundedStyle,
          'border border-[var(--color-navigation-menu-panel-border)] bg-[var(--color-navigation-menu-panel-background)] py-6',
        )}
      >
        <NavigationMenuPanel items={items} />
      </div>
    </SharedNavigationMenu>
  )
}
