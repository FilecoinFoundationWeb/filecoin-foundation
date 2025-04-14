import { Heading, type HeadingProps } from '@filecoin-foundation/ui/Heading'

export type CardTitleProps = {
  tag?: HeadingProps['tag']
  children: string
}

export function CardTitle({ children, tag = 'h3' }: CardTitleProps) {
  return (
    <Heading isClamped tag={tag} variant="lg">
      {children}
    </Heading>
  )
}
