import { usePathname } from 'next/navigation'

import { type SubLinkProps } from '@/components/DesktopNavigation'

import { isInternalLink, isExternalLink } from '@/utils/linkUtils'

export function useActiveItems(items: SubLinkProps[]) {
  const pathname = usePathname()
  const internalItems = items.filter((item) => isInternalLink(item.href))
  const externalItems = items.filter((item) => isExternalLink(item.href))
  const isActive = internalItems.some((item) => item.href === pathname)

  return { internalItems, externalItems, isActive }
}
