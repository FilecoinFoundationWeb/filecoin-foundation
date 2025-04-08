import { type HeadingProps, Heading } from '@filecoin-foundation/ui/Heading'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'
import { clsx } from 'clsx'

import { CardLink } from '@/components/Card'

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
    <li className="relative flex flex-col justify-between gap-3 rounded-lg border border-brand-500 bg-brand-700/10 p-4 backdrop-blur-md hover:bg-brand-400/20">
      <div className={clsx('flex flex-col gap-3', cta && 'mb-10')}>
        <Heading {...heading} />
        {children && <p>{children}</p>}
      </div>

      {cta && <CardLink {...cta} />}
    </li>
  )
}
