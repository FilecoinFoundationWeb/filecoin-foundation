import { Link } from '@/i18n/navigation'

import {
  BaseLink as SharedBaseLink,
  type BaseLinkProps as SharedBaseLinkProps,
} from '@filecoin-foundation/filecoin-ui/BaseLink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type BaseLinkProps = Omit<SharedBaseLinkProps, 'baseDomain'>

export function BaseLink(props: BaseLinkProps) {
  return (
    <SharedBaseLink
      {...props}
      baseDomain={BASE_DOMAIN}
      InternalLinkComponent={(props) => <Link href={props.href} />}
    />
  )
}
