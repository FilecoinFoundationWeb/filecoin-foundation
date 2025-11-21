import { usePathname } from 'next/navigation'

import { isInternalLink } from '../../../utils/linkUtils'
import type { NavigationMenuItem } from '../types'

type UseIsNavigationMenuActiveProps = {
  items: NavigationMenuItem['items']
  baseDomain: string
}

export function useIsNavigationMenuActive({
  items,
  baseDomain,
}: UseIsNavigationMenuActiveProps) {
  const pathname = usePathname()
  const links = items.flatMap((item) => item.links).map((item) => item.href)
  const internalLinks = links.filter((item) => {
    return isInternalLink(item, baseDomain)
  })

  return internalLinks.some((item) => item === pathname)
}
