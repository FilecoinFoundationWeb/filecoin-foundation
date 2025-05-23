import {
  DescriptionText,
  type DescriptionProps,
} from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'

import { Button } from './Button'

type CTASectionProps = {
  title: string
  description: DescriptionProps['children']
  cta?: {
    href: string
    text: string
  }
}

export function CTASection({ title, description, cta }: CTASectionProps) {
  return (
    <section>
      <div className="bg-brand-100 mb-16 h-px w-full" />
      <div className="flex flex-col gap-6 sm:items-center">
        <div className="space-y-6 sm:max-w-md sm:text-center">
          <Heading tag="h2" variant="3xl">
            {title}
          </Heading>
          <DescriptionText>{description}</DescriptionText>
        </div>
        {cta && <Button href={cta.href}>{cta.text}</Button>}
      </div>
    </section>
  )
}
