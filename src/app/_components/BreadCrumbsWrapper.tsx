'use client'

import { usePathname } from 'next/navigation'

import { BreadCrumbs } from '@/components/BreadCrumbs'

import { PATHS } from '@/constants/paths'

export function BreadCrumbsWrapper() {
  const pathname = usePathname()

  if (pathname === PATHS.HOME.path) {
    return null
  }

  return <BreadCrumbs />
}
