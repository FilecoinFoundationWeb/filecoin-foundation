import { getUIConfig } from '../../config/ui-config'
import { isExternalLink } from '../../utils/linkUtils'

import {
  ExternalTextLink,
  type ExternalTextLinkProps,
} from './ExternalTextLink'
import {
  InternalTextLink,
  type InternalTextLinkProps,
} from './InternalTextLink'

export type SmartTextLinkProps = ExternalTextLinkProps | InternalTextLinkProps

export function SmartTextLink({ href, ...rest }: SmartTextLinkProps) {
  const { baseDomain } = getUIConfig()

  const isExternal = isExternalLink(href, baseDomain)

  return isExternal ? (
    <ExternalTextLink href={href} {...rest} />
  ) : (
    <InternalTextLink href={href} {...rest} />
  )
}
