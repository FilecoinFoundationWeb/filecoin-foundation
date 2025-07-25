'use client'

import { useMemo } from 'react'

import { usePathname } from 'next/navigation'

import { PATHS } from '@/constants/paths'

const THEME = {
  [PATHS.HOME.path]: 'hidden',
  [PATHS.LEARN.path]: 'hidden',
  [PATHS.BUILD_ON_FILECOIN.path]: 'dark',
  [PATHS.OFFER_STORAGE.path]: 'dark',
  [PATHS.STORE_DATA.path]: 'dark',
} as const

export function useNavigationTheme() {
  const pathname = usePathname()

  const theme = useMemo(() => {
    return THEME[pathname]
  }, [pathname])

  return theme
}
