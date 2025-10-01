import {
  BaseLink as SharedBaseLink,
  type BaseLinkProps as SharedBaseLinkProps,
} from '@filecoin-foundation/ui/BaseLink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Link } from '@/i18n/navigation'

export type BaseLinkProps = Omit<
  SharedBaseLinkProps,
  'baseDomain' | 'LinkComponent'
>

export function BaseLink(props: BaseLinkProps) {
  return (
    <SharedBaseLink
      {...props}
      baseDomain={BASE_DOMAIN}
      LinkComponent={(props) => <Link href={props.href} />}
    />
  )
}
