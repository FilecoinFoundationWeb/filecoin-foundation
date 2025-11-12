'use client'

import { headerNavigationItems } from './constants/navigation'
import { NavigationLanguageToggle } from './NavigationLanguageToggle'
import { NavigationMainLink } from './NavigationMainLink'
import { NavigationMenu } from './NavigationMenu/NavigationMenu'

export function DesktopNavigation() {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <ul aria-label="Main navigation menu" className="flex items-center gap-6">
        {headerNavigationItems.map((item) => {
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
