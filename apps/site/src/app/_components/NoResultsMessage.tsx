import type { CTAProps } from '@/types/ctaType'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Icon, type IconProps } from '@/components/Icon'

type NoResultsMessageProps = {
  icon: IconProps['component']
  message: string,
  title: string,
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
      {cta && <Button href={cta.href}>{cta.text}</Button>}
    </div>
  )
}
