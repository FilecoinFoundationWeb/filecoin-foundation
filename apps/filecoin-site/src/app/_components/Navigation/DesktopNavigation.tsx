'use client'

import { useTranslations } from 'next-intl'

import { NavigationMainLink } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMainLink'

import { getHeaderNavigationItems } from './constants/navigation'
import { NavigationLanguageToggle } from './NavigationLanguageToggle'
import { NavigationMenu } from './NavigationMenu'

export function DesktopNavigation() {
  const t = useTranslations('navigation')

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <ul aria-label="Main navigation menu" className="flex items-center gap-6">
        {getHeaderNavigationItems(t).map((item) => {
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
      <NavigationLanguageToggle variant="compact" />
    </div>
  )
}
