import { useCallback } from 'react'

import { usePathname } from 'next/navigation'

import { getUIConfig } from '../../../config/ui-config'
import { isInternalLink } from '../../../utils/linkUtils'
import type { NavigationMenuItem } from '../types'

export function useIsNavigationMenuActive(items: NavigationMenuItem['items']) {
  const memoizedGetUIConfig = useCallback(() => getUIConfig(), [])
  const { baseDomain } = memoizedGetUIConfig()

  const pathname = usePathname()
  const links = items.flatMap((item) => item.links).map((item) => item.href)
  const internalLinks = links.filter((item) => {
    return isInternalLink(item, baseDomain)
  })

  return internalLinks.some((item) => item === pathname)
}
