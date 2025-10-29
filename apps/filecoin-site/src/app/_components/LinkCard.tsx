import {
  LinkCard as SharedLinkCard,
  type LinkCardProps as SharedLinkCardProps,
} from '@filecoin-foundation/ui-filecoin/LinkCard'

export { type LinkCardData } from '@filecoin-foundation/ui-filecoin/LinkCard'

import { BaseLink } from '@/components/BaseLink'

type LinkCardProps = Omit<SharedLinkCardProps, 'LinkComponent'>

export function LinkCard(props: LinkCardProps) {
  return <SharedLinkCard {...props} LinkComponent={BaseLink} />
}
