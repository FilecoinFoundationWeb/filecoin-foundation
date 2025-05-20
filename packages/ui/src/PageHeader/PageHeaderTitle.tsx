import { Heading } from '@filecoin-foundation/ui/Heading'

export type PageHeaderTitleProps = {
  children: string
}

export function PageHeaderTitle({ children }: PageHeaderTitleProps) {
  return (
    <Heading tag="h1" variant="4xl">
      {children}
    </Heading>
  )
}
