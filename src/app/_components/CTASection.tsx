import { Button } from '@/components/Button'
import {
  DescriptionText,
  type DescriptionTextType,
} from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'

type CTASectionProps = {
  title: string
  description: DescriptionTextType
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
        {cta && <Button href={cta.href}>{cta.text}</Button>}
      </div>
    </section>
  )
}
