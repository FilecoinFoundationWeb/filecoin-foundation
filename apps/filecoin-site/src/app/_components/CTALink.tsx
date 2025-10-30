import { Link } from '@/i18n/navigation'

import {
  CTALink as SharedCTALink,
  type CTALinkProps as SharedCTALinkProps,
} from '@filecoin-foundation/ui-filecoin/CTALink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type CTALinkProps = Omit<
  SharedCTALinkProps,
  'baseDomain' | 'InternalLinkComponent'
>

export function CTALink(props: CTALinkProps) {
  return (
    <SharedCTALink
      {...props}
      baseDomain={BASE_DOMAIN}
      InternalLinkComponent={Link}
    />
  )
}
