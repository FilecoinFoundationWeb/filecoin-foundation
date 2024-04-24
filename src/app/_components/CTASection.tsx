import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

type CTASectionProps = {
  title: string
  description?: string | React.ReactNode
  cta?: {
    href: string
    text: string
  }
}

export function CTASection({ title, description, cta }: CTASectionProps) {
  return (
    <section className="flex flex-col items-center gap-16">
      <div className="h-px w-full bg-brand-100" />
      <div className="xs:block xs:max-w-md xs:text-center flex flex-col space-y-6">
        <Heading tag="h2" variant="3xl">
          {title}
        </Heading>
        <p className="max-w-[75ch]">{description}</p>
        {cta && <Button href={cta.href}>{cta.text}</Button>}
      </div>
    </section>
  )
}
