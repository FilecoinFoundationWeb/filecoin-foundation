import {
  SimpleCard as SharedSimpleCard,
  type SimpleCardProps as SharedSimpleCardProps,
} from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { CTALink } from '@/components/CTALink'

export { type SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

export type SimpleCardProps = Omit<SharedSimpleCardProps, 'LinkComponent'>

export function SimpleCard(props: SimpleCardProps) {
  return <SharedSimpleCard LinkComponent={CTALink} {...props} />
}
