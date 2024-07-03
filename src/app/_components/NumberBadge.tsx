import { BadgeWrapper } from '@/components/BadgeWrapper'

type NumberBadgeProps = {
  number: number
}

export function NumberBadge({ number }: NumberBadgeProps) {
  return (
    <BadgeWrapper>
      <span className="text-2xl font-bold">{number}</span>
    </BadgeWrapper>
  )
}
