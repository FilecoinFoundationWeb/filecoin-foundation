import { clsx } from 'clsx'

import { CTALink } from '@/components/CTALink'
import { SimpleCard, type SimpleCardProps } from '@/components/SimpleCard'

type SimpleCardWithGradientProps = {
  title: SimpleCardProps['title']
  description: SimpleCardProps['description']
  badge: SimpleCardProps['badge']
  gradientIndex: number
  cta: NonNullable<SimpleCardProps['cta']>
}

const GRADIENT_STEPS = [
  'from-brand-100 to-brand-400',
  'from-brand-400 to-brand-700',
  'from-brand-700 to-brand-950',
] as const

export function SimpleCardWithGradient({
  title,
  description,
  badge,
  cta,
  gradientIndex,
}: SimpleCardWithGradientProps) {
  const index = gradientIndex % GRADIENT_STEPS.length

  return (
    <li className="card-border-color relative flex h-full flex-col border">
      <div
        aria-hidden="true"
        className={clsx(
          'h-25 w-full flex-shrink-0 bg-gradient-to-r',
          GRADIENT_STEPS[index],
        )}
      />

      <SimpleCard
        as="div"
        title={title}
        badge={badge}
        description={description}
        border="none"
      />

      <CTALink
        inset
        href={cta.href}
        aria-label={cta.text}
        textClassName="absolute bottom-6 left-6"
      >
        {cta.text}
      </CTALink>
    </li>
  )
}
