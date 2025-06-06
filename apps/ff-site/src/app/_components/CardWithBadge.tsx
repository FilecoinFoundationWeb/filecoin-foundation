import { Heading } from '@filecoin-foundation/ui/Heading'

import type { BadgeProps } from '@/components/Badge'

type CardWithBadgeProps = {
  title: string
  description: string | React.ReactNode
  children: React.ReactElement<BadgeProps>
}

export function CardWithBadge({
  title,
  description,
  children,
}: CardWithBadgeProps) {
  return (
    <li className="space-y-4">
      {children}
      <Heading tag="h3" variant="lg">
        {title}
      </Heading>
      <p>{description}</p>
    </li>
  )
}
