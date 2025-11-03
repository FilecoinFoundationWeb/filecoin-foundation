import {
  NavigationMenuLink as SharedNavigationMenuLink,
  type LocalNavigationMenuLinkProps,
} from '@filecoin-foundation/ui/NavigationMenu'

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
      {...props}
    />
  )
}
