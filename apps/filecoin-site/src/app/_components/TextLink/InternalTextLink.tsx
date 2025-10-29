import { Link } from '@/i18n/navigation'

import {
  InternalTextLink as SharedInternalTextLink,
  type InternalTextLinkProps as SharedInternalTextLinkProps,
} from '@filecoin-foundation/ui-filecoin/TextLink/InternalTextLink'

type InternalTextLinkProps = Omit<SharedInternalTextLinkProps, 'LinkComponent'>

export function InternalTextLink(props: InternalTextLinkProps) {
  return <SharedInternalTextLink {...props} InternalLinkComponent={Link} />
}
