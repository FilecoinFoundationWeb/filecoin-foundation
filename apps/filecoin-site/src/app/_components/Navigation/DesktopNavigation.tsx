'use client'

import { clsx } from 'clsx'

import { useNavigationTheme } from '@/hooks/useNavigationTheme'

import { NAV_LINKS } from './constants'
import { NavigationLink } from './NavigationLink'

export function DesktopNavigation() {
  const isDarkTheme = useNavigationTheme()

  return (
    <ul aria-label="Main navigation menu" className="hidden lg:flex lg:gap-9">
      {NAV_LINKS.map(({ path, label }) => (
        <li
          key={path}
          className={clsx(isDarkTheme ? 'text-white' : 'text-zinc-600')}
        >
          <NavigationLink href={path} label={label} />
        </li>
      ))}
    </ul>
  )
}
