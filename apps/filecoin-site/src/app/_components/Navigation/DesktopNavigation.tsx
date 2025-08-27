'use client'

import { navigationBis } from '@/constants/navigation'

import { NavigationLanguageToggle } from './NavigationLanguageToggle'
import { NavigationMainLink } from './NavigationMainLink'
import { NavigationMenu } from './NavigationMenu'

export function DesktopNavigation() {
  return (
    <div className="hidden xl:flex xl:w-full xl:items-center xl:justify-between xl:gap-4">
      <ul aria-label="Main navigation menu" className="flex items-center gap-9">
        {navigationBis.map((item) => {
          if ('items' in item) {
            return <NavigationMenu key={item.label} {...item} />
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
