import type { BreadcrumbList, ListItem } from 'schema-dts'

import type { PathValues } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

type GenerateBreadcrumbListProps = {
  path: string
  title: string
  parentPaths?: Array<{ path: PathValues; title: string }>
}

export function generateBreadcrumbList({
  path,
  title,
  parentPaths = [],
}: GenerateBreadcrumbListProps): BreadcrumbList {
  const fullUrl = `${BASE_URL}${path}`

  const HOME_ITEM: ListItem = {
    '@type': 'ListItem',
    position: 1,
    name: 'Home',
    item: BASE_URL,
  }

  const items: ListItem[] = [HOME_ITEM]

  parentPaths.map((level, index) => ({
    '@type': 'ListItem',
    position: index + 2,
    name: level.title,
    item: `${BASE_URL}${level.path}`,
  }))

  items.push({
    '@type': 'ListItem',
    position: items.length + 1,
    name: title,
    item: fullUrl,
  })

  return { '@type': 'BreadcrumbList', itemListElement: items }
}
