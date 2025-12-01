'use client'

import { clsx } from 'clsx'

import { backgroundVariants, useBackgroundVariant } from '../Section/Section'

import { NavigationMenuLink } from './NavigationMenuLink'
import { type NavigationMenuItem } from './types'

const roundedStyle = 'rounded-2xl'

type NavigationMenuPanelProps = {
  items: NavigationMenuItem['items']
}

export function NavigationMenuPanel({ items }: NavigationMenuPanelProps) {
  const { binaryVariant } = useBackgroundVariant()

  return (
    <div className={clsx(roundedStyle, backgroundVariants[binaryVariant])}>
      <div
        className={clsx(
          roundedStyle,
          'border border-(--color-navigation-menu-panel-border) bg-(--color-navigation-menu-panel-background) py-6',
        )}
      >
        <div className="flex divide-x divide-(--color-border-base)">
          {items.map((item) => (
            <div key={item.title} className="px-4">
              <p className="mb-2 px-4 text-sm text-(--color-paragraph-text)">
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
                    <NavigationMenuLink {...link} />
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
