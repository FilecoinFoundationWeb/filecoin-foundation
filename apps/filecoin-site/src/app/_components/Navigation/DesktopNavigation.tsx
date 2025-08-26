'use client'

import { navigationBis } from '@/constants/navigation'

import type { SectionProps } from '../Section'

import { NavigationLanguageToggle } from './NavigationLanguageToggle'
import { NavigationMainLink } from './NavigationMainLink'
import { NavigationMenu } from './NavigationMenu'

export type MobileNavigationProps = {
  backgroundVariant: SectionProps['backgroundVariant']
}

export function DesktopNavigation({
  backgroundVariant,
}: MobileNavigationProps) {
  return (
    <div className="hidden xl:flex xl:w-full xl:items-center xl:justify-between xl:gap-4">
      <ul aria-label="Main navigation menu" className="flex items-center gap-9">
        {navigationBis.map((item) => {
          if ('items' in item) {
            const { label, items } = item

            return (
              <NavigationMenu
                key={label}
                backgroundVariant={backgroundVariant}
                label={label}
                items={items}
              />
            )
          }

          return (
            <li key={item.href}>
              <NavigationMainLink on="desktop" {...item} />
            </li>
          )
        })}
      </ul>
      <NavigationLanguageToggle />
    </div>
  )
}
