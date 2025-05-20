import { Heading } from '@filecoin-foundation/ui/Heading'

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
    <Heading tag="h1" variant={titleVariant}>
      {children}
    </Heading>
  )
}
