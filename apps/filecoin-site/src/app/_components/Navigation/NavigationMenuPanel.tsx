'use client'

import { type ExpandedNavItem } from '@/constants/navigation'

import { useBackgroundVariant } from '@/components/BackgroundVariantContext'
import { backgroundVariants } from '@/components/Section'

import { variantMapping } from './constants'
import { NavigationMenuLink } from './NavigationMenuLink'

type NavigationMenuPanelProps = {
  items: ExpandedNavItem['items']
}

export function NavigationMenuPanel({ items }: NavigationMenuPanelProps) {
  const backgroundVariant = useBackgroundVariant()
  const desktopBackgroundVariant = variantMapping[backgroundVariant]

  return (
    <div className={backgroundVariants[desktopBackgroundVariant]}>
      <div className="rounded-xl border border-[var(--color-navigation-menu-panel-border)] bg-[var(--color-navigation-menu-panel-background)] py-6">
        <div className="flex divide-x divide-[var(--color-border-base)]">
          {items.map((item) => (
            <div key={item.title} className="px-4">
              <p className="mb-2 px-4 text-sm text-[var(--color-paragraph-text)]">
                {item.title}
              </p>
              <ul className="grid grid-flow-col grid-rows-2 gap-2">
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
