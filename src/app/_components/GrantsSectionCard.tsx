import { Card } from '@/components/Card'
import { Heading, HeadingProps } from '@/components/Heading'

import { CTAProps } from '@/types/sharedProps/ctaType'

type GrantsSectionCardProps = {
  heading: HeadingProps
  children?: React.ReactNode
  cta?: CTAProps
}

export function GrantsSectionCard({
  heading,
  children,
  cta,
}: GrantsSectionCardProps) {
  return (
    <div className="relative flex flex-col gap-3 rounded-lg border border-brand-500 bg-brand-700 bg-opacity-10 p-4 backdrop-blur-md">
      <Heading {...heading} />
      <p className="mb-9">{children}</p>
      {cta && <Card.Link {...cta} />}
    </div>
  )
}
