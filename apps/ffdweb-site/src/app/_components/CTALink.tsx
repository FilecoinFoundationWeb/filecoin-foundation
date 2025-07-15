import { CTALink as SharedCTALink } from '@filecoin-foundation/ui/CTALink'
import type { CTALinkProps } from '@filecoin-foundation/ui/CTALink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type CTALinkProps = Omit<SharedCTALinkProps, 'baseDomain'>

export function CTALink(props: LocalCTALinkProps) {
  return <SharedCTALink {...props} baseDomain={BASE_DOMAIN} />
}
