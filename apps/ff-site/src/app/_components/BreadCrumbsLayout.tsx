'use client'

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { BreadCrumbs } from '@filecoin-foundation/ui/BreadCrumbs'
import type { Route } from 'next'

import { PATHS } from '@/constants/paths'

import type { LayoutProps } from '@/layout'

export function BreadCrumbsLayout({ children }: LayoutProps) {
  const pathname = usePathname()

  return (
    <div className="flex grow flex-col gap-8">
      <BreadCrumbs
        currentPath={pathname}
        homePath={PATHS.HOME.path}
        homeLabel={PATHS.HOME.label}
        renderLink={({ href, className, children }) => (
          <Link href={href as Route} className={className}>
            {children}
          </Link>
        )}
      />
      {children}
    </div>
  )
}
