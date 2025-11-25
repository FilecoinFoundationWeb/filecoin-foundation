import { clsx } from 'clsx'

import { getUIConfig } from '../../config/ui-config'
import { isExternalLink } from '../../utils/linkUtils'

import { ExternalLink, type ExternalLinkProps } from './components/ExternalLink'
import { InternalLink, type InternalLinkProps } from './components/InternalLink'

export type VariantClasses = {
  internal: string
  [key: string]: string
}

export type NavigationMenuLinkProps<Variants extends VariantClasses> = (
  | InternalLinkProps
  | ExternalLinkProps
) & {
  variants: { options: Variants; selected?: keyof Variants }
}

export function NavigationMenuLink<Variants extends VariantClasses>({
  href,
  label,
  description,
  variants,
  ...rest
}: NavigationMenuLinkProps<Variants>) {
  const { baseDomain } = getUIConfig()

  const variant = variants.options[variants.selected || 'internal']
  const isExternal = isExternalLink(href, baseDomain)

  const props = {
    href,
    label,
    description,
    className: clsx('group navigation-menu-link', variant),
    ['aria-label']: `${label} page (${isExternal ? 'external link' : 'internal link'})`,
    ...rest,
  }

  return isExternal ? <ExternalLink {...props} /> : <InternalLink {...props} />
}
