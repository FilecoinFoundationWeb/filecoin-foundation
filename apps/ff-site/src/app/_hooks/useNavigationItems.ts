import { usePathname } from 'next/navigation'

import {
  isExternalLink,
  isInternalLink,
} from '@filecoin-foundation/utils/linkUtils'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

type BaseNavigationItem = {
  href: string
  label: string
}

export function useNavigationItems<Item extends BaseNavigationItem>(
  items: Array<Item>,
) {
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
