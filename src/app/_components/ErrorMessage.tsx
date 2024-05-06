import { Button } from '@/components/Button'
import { DescriptionText } from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'

import { type CTAProps } from '@/types/sharedProps/ctaType'

import { PATHS } from '@/constants/paths'

type ErrorMessageProps = {
  kicker: string
  title: string
  cta?: CTAProps
  children: string
}

export default function ErrorMessage({
  kicker,
  title,
  cta,
  children,
}: ErrorMessageProps) {
  const { href, text } = cta || {
    href: PATHS.HOME.path,
    text: 'Return Home',
  }

  return (
    <div className="m-auto flex max-w-xs flex-col gap-6 py-32 sm:items-center sm:text-center">
      <span className="text-7xl">{kicker}</span>
      <Heading tag="h2" variant="3xl">
        {title}
      </Heading>
      <DescriptionText>{children}</DescriptionText>
      <Button href={href} variant="primary">
        {text}
      </Button>
    </div>
  )
}
