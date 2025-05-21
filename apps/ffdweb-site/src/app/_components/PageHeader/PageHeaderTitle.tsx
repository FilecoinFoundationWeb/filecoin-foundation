import { PageHeaderTitle as SharedPageHeaderTitle } from '@filecoin-foundation/ui/PageHeader'

export type PageHeaderTitleProps = {
  isHomepage?: boolean
  children: string
}

export function PageHeaderTitle({
  isHomepage = false,
  children,
}: PageHeaderTitleProps) {
  const titleVariant = isHomepage ? '5xl-fluid' : '4xl-fluid'

  return (
    <SharedPageHeaderTitle variant={titleVariant}>
      {children}
    </SharedPageHeaderTitle>
  )
}
