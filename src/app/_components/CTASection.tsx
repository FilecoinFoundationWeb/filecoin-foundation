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
      <div className="flex flex-col space-y-6 whitespace-pre-line sm:block sm:text-center">
        <Heading tag="h2" variant="3xl" className="max-w-72 sm:m-auto">
          {title}
        </Heading>
        <p className="max-w-[60ch]">{description}</p>
        {cta && <Button href={cta.href}>{cta.text}</Button>}
      </div>
    </section>
  )
}
