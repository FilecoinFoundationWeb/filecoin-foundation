'use client'

import { clsx } from 'clsx'

import { NavigationMenu as SharedNavigationMenu } from '@filecoin-foundation/ui/NavigationMenu'

import type { ExpandedNavItem } from '@/constants/navigation'

import { backgroundVariants } from '@/components/Section'

import type { SectionProps } from '../Section'

import { variantMapping } from './constants'
import { desktopStyle } from './NavigationMainLink'
import { NavigationMenuPanel } from './NavigationMenuPanel'
import { useIsNavigationMenuActive } from './useIsNavigationMenuActive'

const roundedStyle = 'rounded-xl'

type MobileNavigationProps = {
  backgroundVariant: SectionProps['backgroundVariant']
} & ExpandedNavItem

export function NavigationMenu({
  label,
  items,
  backgroundVariant,
}: MobileNavigationProps) {
  const desktopBackgroundVariant = variantMapping[backgroundVariant]

  const isActive = useIsNavigationMenuActive(items)

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
