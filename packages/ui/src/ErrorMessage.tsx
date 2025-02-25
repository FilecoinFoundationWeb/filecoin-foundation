import { Button } from '@filecoin-foundation/ui/Button'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { type IconProps } from '@filecoin-foundation/ui/Icon'

type CTAProps = {
  href: string
  text: string
  icon?: IconProps['component']
  ariaLabel?: string
}

type ErrorMessageProps = {
  kicker: string
  title: string
  baseDomain: string
  cta?: CTAProps
  children: string
}

export function ErrorMessage({
  kicker,
  title,
  baseDomain,
  cta,
  children,
}: ErrorMessageProps) {
  const { href, text } = cta || {
    href: '/',
    text: 'Return Home',
  }

  return (
    <div className="m-auto flex max-w-xs flex-col gap-6 py-32 sm:items-center sm:text-center">
      <span className="text-7xl">{kicker}</span>
      <Heading tag="h2" variant="3xl">
        {title}
      </Heading>
      <DescriptionText>{children}</DescriptionText>
      <Button href={href} baseDomain={baseDomain}>
        {text}
      </Button>
    </div>
  )
}
