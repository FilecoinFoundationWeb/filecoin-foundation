import { Button } from '@filecoin-foundation/ui/Button'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

import type { CTAProps } from '@/types/ctaType'

import { BASE_DOMAIN } from '@/constants/siteMetadata'
type NoResultsMessageProps = {
  icon: IconProps['component']
  title: string
  message: string
  cta?: CTAProps
}

export function NoResultsMessage({
  icon,
  title,
  message,
  cta,
}: NoResultsMessageProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-brand-200">
      <span className="grid size-16 place-items-center rounded-full bg-brand-700 text-brand-300">
        <Icon component={icon} />
      </span>
      <Heading tag="h3" variant="xl">
        {title}
      </Heading>
      <p className="max-w-md text-center">{message}</p>
      {cta && (
        <Button href={cta.href} baseDomain={BASE_DOMAIN}>
          {cta.text}
        </Button>
      )}
    </div>
  )
}
