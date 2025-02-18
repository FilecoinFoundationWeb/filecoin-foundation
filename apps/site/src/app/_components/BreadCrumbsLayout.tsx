import React from 'react'

import { BreadCrumbs } from '@/components/BreadCrumbs'

import type { LayoutProps } from '@/layout'

export function BreadCrumbsLayout({ children }: LayoutProps) {
  return (
    <div className="flex grow flex-col gap-8">
      <BreadCrumbs />
      {children}
    </div>
  )
}
