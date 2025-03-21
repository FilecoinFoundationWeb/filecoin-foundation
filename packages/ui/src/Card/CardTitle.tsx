import { Heading } from '@filecoin-foundation/ui/Heading'

export type CardTitleProps = {
  children: string
}

export function CardTitle({ children }: CardTitleProps) {
  return (
    <Heading isClamped tag="h3" variant="lg">
      {children}
    </Heading>
  )
}
