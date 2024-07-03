import { Heading } from '@/components/Heading'
import type { IconBadgeProps } from '@/components/IconBadge'
import type { NumberBadgeProps } from '@/components/NumberBadge'

type CardWithBadgeProps = {
  title: string
  description: string | React.ReactNode
  children:
    | React.ReactElement<IconBadgeProps>
    | React.ReactElement<NumberBadgeProps>
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
