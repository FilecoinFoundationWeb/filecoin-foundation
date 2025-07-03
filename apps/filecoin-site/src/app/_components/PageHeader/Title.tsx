import { Heading } from '@/components/Heading'

type TitleProps = {
  backgroundVariant: 'light' | 'dark'
  children: string
}

export function Title({ backgroundVariant, children }: TitleProps) {
  return (
    <Heading
      tag="h1"
      variant="5xl-medium"
      backgroundVariant={backgroundVariant}
    >
      {children}
    </Heading>
  )
}
