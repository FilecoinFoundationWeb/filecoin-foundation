import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

type CTASectionProps = {
  title: string
  description: string | React.ReactNode
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
        <div className="space-y-8 sm:max-w-md sm:text-center">
          <Heading tag="h2" variant="3xl">
            {title}
          </Heading>
          <p>{description}</p>
        </div>
        {cta && <Button href={cta.href}>{cta.text}</Button>}
      </div>
    </section>
  )
}
