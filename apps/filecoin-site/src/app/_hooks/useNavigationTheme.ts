'use client'

import { useMemo } from 'react'

import { usePathname } from 'next/navigation'

import { PATHS } from '@/constants/paths'

const DARK_THEME_ROUTES = [
  PATHS.BUILD_ON_FILECOIN.path,
  PATHS.LEARN.path,
  PATHS.OFFER_STORAGE.path,
  PATHS.STORE_DATA.path,
]

export function useNavigationTheme() {
  const pathname = usePathname()

  return useMemo(() => {
    return DARK_THEME_ROUTES.some((route) => pathname.startsWith(route))
  }, [pathname])
}
