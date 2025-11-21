import { Link } from '@/i18n/navigation'

import {
  InternalTextLink as SharedInternalTextLink,
  type InternalTextLinkProps as SharedInternalTextLinkProps,
} from '@filecoin-foundation/ui-filecoin/TextLink/InternalTextLink'

type InternalTextLinkProps = Omit<
  SharedInternalTextLinkProps,
  'InternalLinkComponent'
>

export function InternalTextLink(props: InternalTextLinkProps) {
  // @ts-expect-error: Types of property 'href' are incompatible: string vs RouteImpl | UrlObject
  return <SharedInternalTextLink {...props} InternalLinkComponent={Link} />
}
