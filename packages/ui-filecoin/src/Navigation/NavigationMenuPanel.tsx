'use client'

import { type ComponentType } from 'react'

import { clsx } from 'clsx'

import { backgroundVariants, useBackgroundVariant } from '../Section/Section'

import { variantMapping } from './constants'
import { type ExpandedNavItem, type NavigationMenuItem } from './types'

const roundedStyle = 'rounded-2xl'

type NavigationMenuPanelProps = {
  items: NavigationMenuItem['items']
  NavigationMenuLinkComponent: ComponentType<ExpandedNavItem>
}

export function NavigationMenuPanel({
  items,
  NavigationMenuLinkComponent,
}: NavigationMenuPanelProps) {
  const backgroundVariant = useBackgroundVariant()
  const desktopBackgroundVariant = variantMapping[backgroundVariant]

  return (
    <div
      className={clsx(
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
        <div className="flex divide-x divide-[var(--color-border-base)]">
          {items.map((item) => (
            <div key={item.title} className="px-4">
              <p className="mb-2 px-4 text-sm text-[var(--color-paragraph-text)]">
                {item.title}
              </p>
              <ul
                className="grid grid-rows-2 gap-2"
                style={{
                  gridTemplateColumns: `repeat(${Math.floor(item.links.length / 2)}, minmax(0, 1fr))`,
                }}
              >
                {item.links.map((link) => (
                  <li key={link.href}>
                    <NavigationMenuLinkComponent {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
