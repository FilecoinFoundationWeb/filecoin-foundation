import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

type CTASectionProps = {
  title: string
  description?: string | React.ReactNode
  cta?: {
    href: string
    text?: string
    icon?: React.ReactNode
    ariaLabel?: string
  }
}

export function CTASection({ title, description, cta }: CTASectionProps) {
  return (
    <section className="m-auto space-y-6 text-left sm:text-center">
      <Heading tag="h2" variant="3xl">
        {title}
      </Heading>
      <p className="max-w-[60ch]">{description}</p>
      {cta && (
        <Button
          href={cta.href}
          aria-label={cta.ariaLabel}
          className="sm:self-start"
        >
          <span>{cta.text || 'Learn More'}</span>
        </Button>
      )}
    </section>
  )
}
