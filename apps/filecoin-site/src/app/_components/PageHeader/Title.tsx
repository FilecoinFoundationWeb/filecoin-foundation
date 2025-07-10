import { Heading } from '@/components/Heading'

export type TitleProps = {
  children: string
}

export function Title({ children }: TitleProps) {
  return (
    <Heading tag="h1" variant="5xl-medium">
      {children}
    </Heading>
  )
}
