import { getUIConfig } from '../../config/ui-config'
import { isExternalLink } from '../../utils/linkUtils'

import { ExternalLink, type ExternalLinkProps } from './components/ExternalLink'
import { InternalLink, type InternalLinkProps } from './components/InternalLink'

export type NavigationMenuLinkProps = InternalLinkProps | ExternalLinkProps

export function NavigationMenuLink({
  href,
  label,
  description,
  ...rest
}: NavigationMenuLinkProps) {
  const { baseDomain } = getUIConfig()

  const isExternal = isExternalLink(href, baseDomain)

  const props = {
    href,
    label,
    description,
    className:
      'group focus:brand-outline inline-block max-w-56 rounded-xl p-4 text-(--color-navigation-menu-panel-icon) hover:bg-(--color-navigation-menu-link-background-hover) focus:bg-(--color-navigation-menu-link-background-hover)',
    ['aria-label']: `${label} page (${isExternal ? 'external link' : 'internal link'})`,
    ...rest,
  }

  const Link = isExternal ? ExternalLink : InternalLink

  return <Link {...props} />
}
