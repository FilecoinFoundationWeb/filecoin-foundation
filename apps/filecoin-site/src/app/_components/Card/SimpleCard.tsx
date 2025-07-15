import { CTALink } from '@filecoin-foundation/ui/CTALink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Heading } from '@/components/Heading'

export type SimpleCardProps = {
  title: string
  description: string
  cta: {
    href: string
    text: string
  }
}

export function SimpleCard({ title, description, cta }: SimpleCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-sm border border-black/15 p-8">
      <div className="flex flex-col gap-3">
        <Heading tag="h3" variant="xl-medium" className="text-zinc-950">
          {title}
        </Heading>
        <p className="text-zinc-600">{description}</p>
      </div>
      <CTALink baseDomain={BASE_DOMAIN} href={cta.href} aria-label={cta.text}>
        {cta.text}
      </CTALink>
    </div>
  )
}
