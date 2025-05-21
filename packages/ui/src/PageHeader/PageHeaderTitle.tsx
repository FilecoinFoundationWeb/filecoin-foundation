import { Heading } from '@filecoin-foundation/ui/Heading'

export type PageHeaderTitleProps = {
  variant?: '4xl' | '4xl-fluid' | '5xl-fluid'
  children: string
}

export function PageHeaderTitle({
  variant = '4xl',
  children,
}: PageHeaderTitleProps) {
  return (
    <Heading tag="h1" variant={variant}>
      {children}
    </Heading>
  )
}
