import { usePathname } from 'next/navigation'

import { isInternalLink } from '@filecoin-foundation/utils/linkUtils'

import type { ExpandedNavItem } from '@/constants/navigation'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

export function useIsNavigationMenuActive(items: ExpandedNavItem['items']) {
  const pathname = usePathname()

  const links = items.flatMap((item) => item.links).map((item) => item.href)

  const internalLinks = links.filter((item) => {
    return isInternalLink(item, BASE_DOMAIN)
  })

  return internalLinks.some((item) => item === pathname)
}
