import { type HeadingProps, Heading } from '@/components/Heading'

type TitleProps = {
  color: HeadingProps['color']
  children: string
}

export function Title({ color, children }: TitleProps) {
  return (
    <Heading tag="h1" variant="5xl-medium" color={color}>
      {children}
    </Heading>
  )
}
