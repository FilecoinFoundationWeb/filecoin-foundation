import { usePathname } from 'next/navigation'

import { isInternalLink } from '@filecoin-foundation/utils/linkUtils'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import type { LabelledExpandedNavItems } from '@/_components/Navigation/constants/navigation'

export function useIsNavigationMenuActive(
  items: LabelledExpandedNavItems['items'],
) {
  const pathname = usePathname()
  const links = items.flatMap((item) => item.links).map((item) => item.href)
  const internalLinks = links.filter((item) => {
    return isInternalLink(item, BASE_DOMAIN)
  })

  return internalLinks.some((item) => item === pathname)
}
