import { Card } from '@/components/Card'
import { type HeadingProps, Heading } from '@/components/Heading'

import { type CTAProps } from '@/types/sharedProps/ctaType'

type HomeExploreSectionCardProps = {
  heading: HeadingProps
  cta: CTAProps
  children: React.ReactNode
}

export function HomeExploreSectionCard({
  heading,
  cta,
  children,
}: HomeExploreSectionCardProps) {
  return (
    <div className="relative flex flex-col justify-between gap-3 rounded-lg border border-brand-500 bg-brand-700 bg-opacity-10 p-4 backdrop-blur-md">
      <div className="mb-10 flex flex-col gap-3">
        <Heading {...heading} />
        <p>{children}</p>
      </div>
      <Card.Link {...cta} />
    </div>
  )
}
