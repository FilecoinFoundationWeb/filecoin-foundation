import type React from 'react'

import { Button } from '@filecoin-foundation/ui/Button'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'

type ErrorMessageProps = {
  kicker: string
  title: string
  message: string
  cta?: React.ReactElement<typeof Button>
}

export function ErrorMessage({
  kicker,
  title,
  message,
  cta,
}: ErrorMessageProps) {
  return (
    <div className="m-auto flex max-w-xs flex-col gap-6 py-32 sm:items-center sm:text-center">
      <span className="text-7xl">{kicker}</span>
      <Heading tag="h2" variant="3xl">
        {title}
      </Heading>
      <DescriptionText>{message}</DescriptionText>
      {cta}
    </div>
  )
}
