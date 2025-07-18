import clsx from 'clsx'

import { Badge, type BadgeProps } from '@/components/Badge'
import { CTALink, type CTALinkProps } from '@/components/CTALink'
import { Heading } from '@/components/Heading'

type SimpleCardProps = {
  title: string
  description: string
  cta: {
    href: CTALinkProps['href']
    text: CTALinkProps['children']
  }
  gradientHeaderAndBadge?: {
    gradientIndex: number
    badgeText: BadgeProps['children']
  }
  hasTopBorder?: boolean
}

export type SimpleCardData = Pick<
  SimpleCardProps,
  'title' | 'description' | 'cta'
>

const GRADIENT_STEPS = [
  { from: 'var(--color-brand-100)', to: 'var(--color-brand-300)' },
  { from: 'var(--color-brand-300)', to: 'var(--color-brand-500)' },
  { from: 'var(--color-brand-500)', to: 'var(--color-brand-700)' },
  { from: 'var(--color-brand-700)', to: 'var(--color-brand-900)' },
] as const

export function SimpleCard({
  title,
  description,
  cta,
  gradientHeaderAndBadge,
  hasTopBorder = false,
}: SimpleCardProps) {
  const gradientIndex =
    (gradientHeaderAndBadge?.gradientIndex ?? 0) % GRADIENT_STEPS.length
  const gradientStyle = GRADIENT_STEPS[gradientIndex]
  const isGradientCard = gradientHeaderAndBadge?.badgeText

  return (
    <li
      className={clsx(
        'relative',
        hasTopBorder
          ? 'border-t border-zinc-950/15'
          : 'rounded-sm border border-zinc-950/15',
      )}
    >
      {isGradientCard && (
        <div
          className="h-25 w-full"
          style={{
            background: `linear-gradient(to right, ${gradientStyle.from}, ${gradientStyle.to})`,
          }}
        />
      )}
      <div className={clsx('flex flex-col gap-6 p-6', hasTopBorder && 'px-0')}>
        {isGradientCard && <Badge>{gradientHeaderAndBadge.badgeText}</Badge>}
        <div className="mb-12 flex flex-col gap-3">
          <Heading tag="h3" variant="xl-medium">
            {title}
          </Heading>
          <p className="text-zinc-600">{description}</p>
        </div>
        <CTALink
          inset
          href={cta.href}
          aria-label={cta.text}
          textClassName={clsx(
            'absolute bottom-6',
            hasTopBorder ? 'left-0' : 'left-6',
          )}
        >
          {cta.text}
        </CTALink>
      </div>
    </li>
  )
}
