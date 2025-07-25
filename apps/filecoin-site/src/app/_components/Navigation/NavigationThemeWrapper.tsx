'use client'

import { useNavigationTheme } from '@/hooks/useNavigationTheme'

import { Navigation } from './Navigation'

export function NavigationThemeWrapper() {
  const theme = useNavigationTheme()

  const isDarkTheme = theme === 'dark'
  const isHidden = theme === 'hidden'

  if (isHidden) {
    return null
  }

  return <Navigation backgroundVariant={isDarkTheme ? 'dark' : 'light'} />
}
