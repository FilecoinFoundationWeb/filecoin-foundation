import { type BadgeProps, Badge } from '@/components/Badge'
import {
  type CardWithBadgeProps,
  CardWithBadge,
} from '@/components/CardWithBadge'

export type AboutCardProps = {
  step: BadgeProps['number']
  title: CardWithBadgeProps['title']
  description: CardWithBadgeProps['description']
}

export function AboutCard({ step, title, description }: AboutCardProps) {
  return (
    <CardWithBadge title={title} description={description}>
      <Badge number={step} />
    </CardWithBadge>
  )
}
