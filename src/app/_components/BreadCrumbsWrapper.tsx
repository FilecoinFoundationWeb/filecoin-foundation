'use client'

import { usePathname } from 'next/navigation'

import { BreadCrumbs } from '@/components/BreadCrumbs'

import { PATHS } from '@/constants/paths'

export function BreadCrumbsWrapper() {
  const pathname = usePathname() as string
  const allPaths = Object.values(PATHS).map((route) => route.path) as string[]

  if (pathname === PATHS.HOME.path) {
    return null
  }

  // this is to exclude breadcrumbs in not-found
  if (!allPaths.includes(pathname)) {
    return null
  }

  return <BreadCrumbs />
}
