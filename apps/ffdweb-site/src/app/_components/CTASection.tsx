import { Button } from '@filecoin-foundation/ui/Button'
import { Heading } from '@filecoin-foundation/ui/Heading'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

type CTASectionProps = {
  kicker: string
  title: string
  cta?: {
    href: string
    text: string
  }
}

export function CTASection({ kicker, title, cta }: CTASectionProps) {
  return (
    <section>
      <div className="flex flex-col gap-16 sm:items-center">
        <div className="space-y-8 sm:max-w-lg sm:text-center">
          <span className="block text-neutral-300">{kicker}</span>
          <Heading tag="h2" variant="3xl">
            {title}
          </Heading>
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
