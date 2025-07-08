import { Heading } from '@/components/Heading'

import type { BackgroundVariant } from '@/styles/theme'

export type TitleProps = {
  backgroundVariant: BackgroundVariant
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
