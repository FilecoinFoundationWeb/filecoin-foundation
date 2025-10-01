import {
  InternalTextLink as SharedInternalTextLink,
  type InternalTextLinkProps as SharedInternalTextLinkProps,
} from '@filecoin-foundation/ui/TextLink/InternalTextLink'

import { Link } from '@/i18n/navigation'

type InternalTextLinkProps = Omit<SharedInternalTextLinkProps, 'LinkComponent'>

export function InternalTextLink(props: InternalTextLinkProps) {
  return <SharedInternalTextLink {...props} LinkComponent={Link} />
}
