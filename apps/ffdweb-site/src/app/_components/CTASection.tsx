import { Heading } from '@filecoin-foundation/ui/Heading'

import { Button } from './Button'
import { Kicker } from './Kicker'

type CTASectionProps = {
  kicker: string
  title: string
  cta?: {
    href: string
    text: string
  }
  children?: React.ReactNode
}

export function CTASection({ kicker, title, cta, children }: CTASectionProps) {
  return (
    <section>
      <div className="flex flex-col gap-16 sm:items-center">
        <div className="space-y-8 sm:max-w-lg sm:text-center">
          <Kicker as="div">{kicker}</Kicker>
          <Heading tag="h2" variant="3xl-medium">
            {title}
          </Heading>
        </div>

        {cta && <Button href={cta.href}>{cta.text}</Button>}

        {children}
      </div>
    </section>
  )
}
