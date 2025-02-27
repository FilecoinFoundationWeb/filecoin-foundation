import { Button } from '@filecoin-foundation/ui/Button'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'

type NoResultsMessageProps = {
  icon: IconProps['component']
  title: string
  message: string
  baseDomain: string
  cta?: CTAProps
}

export function NoResultsMessage({
  icon,
  title,
  message,
  baseDomain,
  cta,
}: NoResultsMessageProps) {
  return (
    <div className="text-brand-200 flex flex-col items-center gap-4">
      <span className="bg-brand-700 text-brand-300 grid size-16 place-items-center rounded-full">
        <Icon component={icon} />
      </span>
      <Heading tag="h3" variant="xl">
        {title}
      </Heading>
      <p className="max-w-md text-center">{message}</p>
      {cta && (
        <Button href={cta.href} baseDomain={baseDomain}>
          {cta.text}
        </Button>
      )}
    </div>
  )
}
