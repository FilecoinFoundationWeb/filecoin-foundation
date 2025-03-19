import { Button } from '@filecoin-foundation/ui/Button'
import {
  DescriptionText,
  type DescriptionProps,
} from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

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
      <div className="mb-16 h-px w-full bg-brand-100" />
      <div className="flex flex-col gap-6 sm:items-center">
        <div className="space-y-6 sm:max-w-md sm:text-center">
          <Heading tag="h2" variant="3xl">
            {title}
          </Heading>
          <DescriptionText>{description}</DescriptionText>
        </div>
        {cta && (
          <Button href={cta.href} baseDomain={BASE_DOMAIN}>
            {cta.text}
          </Button>
        )}
      </div>
    </section>
  )
}
