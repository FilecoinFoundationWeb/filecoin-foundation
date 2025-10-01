
import {
  SmartTextLink as SharedSmartTextLink,
  type SmartTextLinkProps as SharedSmartTextLinkProps,
} from '@filecoin-foundation/ui/TextLink/SmartTextLink'

import { Link } from '@/i18n/navigation'

import { BASE_DOMAIN } from '@/_constants/siteMetadata'

type SmartTextLinkProps = Omit<
  SharedSmartTextLinkProps,
  'baseDomain' | 'LinkComponent'
>

export function SmartTextLink(props: SmartTextLinkProps) {
  return (
    <SharedSmartTextLink
      {...props}
      baseDomain={BASE_DOMAIN}
      LinkComponent={Link}
    />
  )
}
