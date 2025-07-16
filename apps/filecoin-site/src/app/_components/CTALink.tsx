import {
  CTALink as SharedCTALink,
  type CTALinkProps as SharedCTALinkProps,
} from '@filecoin-foundation/ui/CTALink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type CTALinkProps = Omit<SharedCTALinkProps, 'baseDomain'>

export function CTALink(props: CTALinkProps) {
  return <SharedCTALink {...props} baseDomain={BASE_DOMAIN} />
}
