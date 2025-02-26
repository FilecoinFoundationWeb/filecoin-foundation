import { BreadCrumbs } from '@filecoin-foundation/ui/BreadCrumbs'

import type { LayoutProps } from '@/layout'

export function BreadCrumbsLayout({ children }: LayoutProps) {
  return (
    <div className="flex grow flex-col gap-8">
      <BreadCrumbs />
      {children}
    </div>
  )
}
