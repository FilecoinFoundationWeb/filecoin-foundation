import type { BreadcrumbList, ListItem } from 'schema-dts'

import { BASE_URL } from '@/constants/siteMetadata'

type MakeBreadcrumbsProps = {
  path: string
  title: string
}

export function makeBreadcrumbs({
  path,
  title,
}: MakeBreadcrumbsProps): BreadcrumbList {
  const fullUrl = `${BASE_URL}${path}`

  const HOME_ITEM: ListItem = {
    '@type': 'ListItem',
    position: 1,
    name: 'Home',
    item: BASE_URL,
  }

  const items: ListItem[] =
    path === '/'
      ? [HOME_ITEM]
      : [
          HOME_ITEM,
          { '@type': 'ListItem', position: 2, name: title, item: fullUrl },
        ]
  return { '@type': 'BreadcrumbList', itemListElement: items }
}
