'use client'

import { clsx } from 'clsx'

import { NavigationMenu } from '@filecoin-foundation/ui/NavigationMenu'

import { navigationBis } from '@/constants/navigation'

import { backgroundVariants } from '@/components/Section'

import type { SectionProps } from '../Section'

import { variantMapping } from './constants'
import {
  NavigationMainLink,
  baseStyle,
  desktopStyle,
} from './NavigationMainLink'
import { NavigationMenuPanel } from './NavigationMenuPanel'

export type MobileNavigationProps = {
  backgroundVariant: SectionProps['backgroundVariant']
}

export function DesktopNavigation({
  backgroundVariant,
}: MobileNavigationProps) {
  const desktopBackgroundVariant = variantMapping[backgroundVariant]

  return (
    <ul
      aria-label="Main navigation menu"
      className="hidden xl:flex xl:items-center xl:gap-9"
    >
      {navigationBis.map((item) => {
        if ('items' in item) {
          return (
            <NavigationMenu
              key={item.label}
              as="li"
              label={item.label}
              labelClassName={clsx(
                baseStyle,
                desktopStyle,
                'inline-flex items-center gap-2',
              )}
              panelClassName={clsx(
                'rounded-xl',
                backgroundVariants[desktopBackgroundVariant],
              )}
            >
              <div className="rounded-xl border border-[var(--color-navigation-menu-panel-border)] bg-[var(--color-navigation-menu-panel-background)] py-6">
                <NavigationMenuPanel items={item.items} />
              </div>
            </NavigationMenu>
          )
        }

        return (
          <li key={item.href}>
            <NavigationMainLink on="desktop" {...item} />
          </li>
        )
      })}
    </ul>
  )
}
