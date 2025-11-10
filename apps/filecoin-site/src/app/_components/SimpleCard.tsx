import {
  SimpleCard as SharedSimpleCard,
  type SimpleCardProps as SharedSimpleCardProps,
} from '@filecoin-foundation/filecoin-ui/SimpleCard'

import { CTALink } from '@/components/CTALink'

export { type SimpleCardData } from '@filecoin-foundation/filecoin-ui/SimpleCard'

export type SimpleCardProps = Omit<SharedSimpleCardProps, 'CTALinkComponent'>

export function SimpleCard(props: SimpleCardProps) {
  return <SharedSimpleCard {...props} CTALinkComponent={CTALink} />
}
