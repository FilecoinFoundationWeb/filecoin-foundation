import { usePathname } from 'next/navigation'

import { type SubNavItemProps } from '@/components/DesktopNavigation'

import { isInternalLink, isExternalLink } from '@/utils/linkUtils'

export function useNavigationItems(items: Array<SubNavItemProps>) {
  const pathname = usePathname()
  const internalItems = items.filter((item) => isInternalLink(item.href))
  const externalItems = items.filter((item) => isExternalLink(item.href))
  const isActive = internalItems.some((item) => item.href === pathname)

  return { internalItems, externalItems, isActive }
}
