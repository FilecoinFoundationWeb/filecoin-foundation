import {
  LinkCard as SharedLinkCard,
  type LinkCardProps as SharedLinkCardProps,
} from '@filecoin-foundation/ui-filecoin/LinkCard'

export type { LinkCardData } from '@filecoin-foundation/ui-filecoin/LinkCard'

import { BaseLink } from '@/components/BaseLink'

type LinkCardProps = Omit<SharedLinkCardProps, 'BaseLinkComponent'>

export function LinkCard(props: LinkCardProps) {
  return <SharedLinkCard {...props} BaseLinkComponent={BaseLink} />
}
