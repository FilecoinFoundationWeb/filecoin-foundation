import { BreadCrumbs } from '@filecoin-foundation/ui/BreadCrumbs'

type ProjectLayoutProps = {
  children: React.ReactNode
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <>
      <div className="mb-16">
        <BreadCrumbs />
      </div>
      {children}
    </>
  )
}
