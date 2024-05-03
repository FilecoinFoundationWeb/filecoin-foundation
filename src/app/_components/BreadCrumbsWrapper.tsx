'use client'

import { usePathname } from 'next/navigation'

import { BreadCrumbs } from '@/components/BreadCrumbs'

import { PATHS } from '@/constants/paths'

export function BreadCrumbsWrapper() {
  const pathname = usePathname()
  const knownPaths = Object.values(PATHS).map((route) => route.path) as string[]

  if (pathname === PATHS.HOME.path || !knownPaths.includes(pathname)) {
    return null
  }

  return <BreadCrumbs />
}
