import { Link } from '@/i18n/navigation'

import {
  SmartTextLink as SharedSmartTextLink,
  type SmartTextLinkProps as SharedSmartTextLinkProps,
} from '@filecoin-foundation/ui/TextLink/SmartTextLink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'


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
