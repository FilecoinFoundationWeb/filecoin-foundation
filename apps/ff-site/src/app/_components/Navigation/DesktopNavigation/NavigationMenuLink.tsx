import {
  NavigationMenuLink as SharedNavigationMenuLink,
  type LocalNavigationMenuLinkProps,
} from '@filecoin-foundation/ui/NavigationMenu'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

const variants = {
  internal: 'inline-block bg-brand-800 p-4 hover:bg-brand-700',
  externalGhost: 'inline-block bg-brand-800 p-4 hover:bg-brand-700',
  externalPrimary:
    'inline-block border border-brand-500 bg-brand-700 p-4 hover:border-brand-400 focus:border-transparent',
  externalSecondary:
    'inline-flex items-center justify-center gap-1 bg-brand-800 px-3 py-5 text-brand-300 hover:bg-brand-700',
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
