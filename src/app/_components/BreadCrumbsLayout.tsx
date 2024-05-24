import React from 'react'

import { BreadCrumbs } from '@/components/BreadCrumbs'

import { LayoutProps } from '@/layout'

export function BreadCrumbsLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-grow flex-col gap-8">
      <BreadCrumbs />
      {children}
    </div>
  )
}
