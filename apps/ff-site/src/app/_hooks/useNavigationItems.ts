import { usePathname } from 'next/navigation'

import {
  isExternalLink,
  isInternalLink,
} from '@filecoin-foundation/utils/linkUtils'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import type { SubNavItemProps } from '@/components/Navigation/DesktopNavigation/SubNavItem'

export function useNavigationItems(items: Array<SubNavItemProps>) {
  const pathname = usePathname()
  const internalItems = items.filter(({ href }) =>
    isInternalLink(href, BASE_DOMAIN),
  )
  const externalItems = items.filter(({ href }) =>
    isExternalLink(href, BASE_DOMAIN),
  )
  const isActive = internalItems.some(({ href }) => href === pathname)

  return { internalItems, externalItems, isActive }
}
