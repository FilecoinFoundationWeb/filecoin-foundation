import { clsx } from 'clsx'

import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'

import { ExternalLink } from './components/ExternalLink'
import { InternalLink } from './components/InternalLink'
import type { LinkItemProps } from './types'

export type VariantClasses = {
  internal: string
  [key: string]: string
}

export type NavigationMenuLinkProps<Variants extends VariantClasses> =
  LinkItemProps & {
    variants: { options: Variants; selected?: keyof Variants }
    baseDomain: string
  }

export function NavigationMenuLink<Variants extends VariantClasses>({
  href,
  label,
  description,
  baseDomain,
  variants,
  ...rest
}: NavigationMenuLinkProps<Variants>) {
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
