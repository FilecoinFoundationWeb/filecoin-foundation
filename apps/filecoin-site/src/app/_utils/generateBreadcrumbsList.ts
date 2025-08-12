import type { BreadcrumbList, ListItem } from 'schema-dts'

import { BASE_URL } from '@/constants/siteMetadata'

type GenerateBreadcrumbListProps = {
  path: string
  title: string
  includeBlogLevel?: boolean
}

export function generateBreadcrumbList({
  path,
  title,
  includeBlogLevel = false,
}: GenerateBreadcrumbListProps): BreadcrumbList {
  const fullUrl = `${BASE_URL}${path}`

  const HOME_ITEM: ListItem = {
    '@type': 'ListItem',
    position: 1,
    name: 'Home',
    item: BASE_URL,
  }

  const BLOG_ITEM: ListItem = {
    '@type': 'ListItem',
    position: 2,
    name: 'Blog',
    item: `${BASE_URL}/blog`,
  }

  const CURRENT_ITEM: ListItem = {
    '@type': 'ListItem',
    position: includeBlogLevel ? 3 : 2,
    name: title,
    item: fullUrl,
  }

  const items: ListItem[] =
    path === '/'
      ? [HOME_ITEM]
      : includeBlogLevel
        ? [HOME_ITEM, BLOG_ITEM, CURRENT_ITEM]
        : [HOME_ITEM, CURRENT_ITEM]

  return { '@type': 'BreadcrumbList', itemListElement: items }
}
