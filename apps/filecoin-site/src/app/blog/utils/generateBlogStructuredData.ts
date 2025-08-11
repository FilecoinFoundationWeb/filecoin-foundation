import type { Blog, ItemList, ListItem } from 'schema-dts'

import type { BlogPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import type { PathValues } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { makeBreadcrumbs } from '@/utils/makeBreadcrumbs'

type GenerateBlogStructuredDataProps = {
  path: PathValues
  name: string
  items?: Array<{
    url: string
    name: string
  }>
  publisherId?: string
}

export function generateBlogStructuredData({
  path,
  name,
  items = [],
  publisherId = `${BASE_URL}/#org`,
}: GenerateBlogStructuredDataProps): BlogPageGraph {
  const fullUrl = `${BASE_URL}${path}`
  const blogId = `${fullUrl}#blog`

  const blog: Blog = {
    '@type': 'Blog',
    '@id': blogId,
    name,
    url: fullUrl,
    publisher: { '@id': publisherId },
  }

  const itemList: ItemList | undefined =
    items.length > 0
      ? {
          '@type': 'ItemList',
          itemListElement: items.map<ListItem>((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: item.url,
            name: item.name,
          })),
        }
      : undefined

  const graph: BlogPageGraph['@graph'] = [
    blog,
    ...(itemList ? [itemList] : []),
    makeBreadcrumbs({ path, title: 'Blog' }),
  ]

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': graph,
  }
}
