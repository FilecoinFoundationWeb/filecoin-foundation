import { BreadCrumbs } from './BreadCrumbs'

type BreadCrumbsLayoutProps = {
  children: React.ReactNode
}

export function BreadCrumbsLayout({ children }: BreadCrumbsLayoutProps) {
  return (
    <div className="flex grow flex-col gap-8">
      <BreadCrumbs />
      {children}
    </div>
  )
}
