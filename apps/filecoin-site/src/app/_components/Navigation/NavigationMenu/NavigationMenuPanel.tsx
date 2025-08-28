'use client'

import { clsx } from 'clsx'

import { useBackgroundVariant } from '@/components/BackgroundVariantContext'
import { backgroundVariants } from '@/components/Section'

import { variantMapping } from '../constants/variantMapping'

import { NavigationMenuLink } from './NavigationMenuLink'

import { type LabelledExpandedNavItems } from '@/_components/Navigation/constants/navigation'

const roundedStyle = 'rounded-2xl'

export function NavigationMenuPanel({
  items,
}: Pick<LabelledExpandedNavItems, 'items'>) {
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
