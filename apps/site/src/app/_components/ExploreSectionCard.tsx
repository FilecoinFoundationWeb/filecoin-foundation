import { clsx } from 'clsx'

import type { CTAProps } from '@/types/ctaType'

import { Card } from '@/components/Card'
import { type HeadingProps, Heading } from '@/components/Heading'

type ExploreSectionCardProps = {
  heading: HeadingProps
  cta?: CTAProps
  children?: React.ReactNode
}

export function ExploreSectionCard({
  heading,
  cta,
  children,
}: ExploreSectionCardProps) {
  return (
    <div className="relative flex flex-col justify-between gap-3 rounded-lg border border-brand-500 bg-brand-700/10 p-4 backdrop-blur-md">
      <div className={clsx('flex flex-col gap-3', cta && 'mb-10')}>
        <Heading {...heading} />
        {children && <p>{children}</p>}
      </div>
      {cta && <Card.Link {...cta} />}
    </div>
  )
}
