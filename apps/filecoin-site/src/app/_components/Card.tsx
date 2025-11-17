import {
  Card as SharedCard,
  type CardProps as SharedCardProps,
} from '@filecoin-foundation/ui-filecoin/Card'

import { CTALink } from '@/components/CTALink'

export type CardProps = Omit<SharedCardProps, 'CTALinkComponent'>

export function Card(props: CardProps) {
  return (
    <SharedCard {...(props as SharedCardProps)} CTALinkComponent={CTALink} />
  )
}
