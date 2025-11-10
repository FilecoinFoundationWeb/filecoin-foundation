import { Link } from '@/i18n/navigation'

import { NavigationMenuLink as SharedNavigationMenuLink } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMenuLink'
import type { LocalNavigationMenuLinkProps } from '@filecoin-foundation/ui-filecoin/Navigation/types'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

const variants = {
  internal: 'inline-block max-w-56 p-4 focus:brand-outline rounded-xl',
}

export function NavigationMenuLink(
  props: LocalNavigationMenuLinkProps<typeof variants>,
) {
  return (
    <SharedNavigationMenuLink
      baseDomain={BASE_DOMAIN}
      variants={{ options: variants, selected: props.variant }}
      // @ts-expect-error: Types of property 'href' are incompatible: string vs RouteImpl | UrlObject
      InternalLinkComponent={Link}
      {...props}
    />
  )
}
