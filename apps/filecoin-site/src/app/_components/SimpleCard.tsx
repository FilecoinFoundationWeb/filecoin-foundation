import clsx from 'clsx'

import { Badge, type BadgeProps } from '@/components/Badge'
import { CTALink, type CTALinkProps } from '@/components/CTALink'
import { Heading } from '@/components/Heading'

export type SimpleCardProps = {
  title: string
  description: string
  cta: {
    href: CTALinkProps['href']
    text: CTALinkProps['children']
  }
  gradient?: {
    from: string
    to: string
  }
  badge?: BadgeProps['children']
  hasTopBorder?: boolean
}

export function SimpleCard({
  title,
  description,
  cta,
  gradient,
  badge,
  hasTopBorder = false,
}: SimpleCardProps) {
  const isGradientCard = gradient && badge

  return (
    <li
      className={clsx(
        hasTopBorder
          ? 'border-t border-black/15'
          : 'rounded-sm border border-black/15',
      )}
    >
      {isGradientCard && (
        <div
          className="h-25 w-full"
          style={{
            background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
          }}
        />
      )}
      <div className={clsx('flex flex-col gap-6 p-6', hasTopBorder && 'px-0')}>
        {isGradientCard && <Badge>{badge}</Badge>}
        <div className="flex flex-col gap-3">
          <Heading tag="h3" variant="xl-medium" className="text-zinc-950">
            {title}
          </Heading>
          <p className="text-zinc-600">{description}</p>
        </div>
        <CTALink href={cta.href} aria-label={cta.text}>
          {cta.text}
        </CTALink>
      </div>
    </li>
  )
}
