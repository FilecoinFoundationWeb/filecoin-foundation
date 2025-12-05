import type { Blog, ItemList, ListItem } from 'schema-dts'

import type { BlogPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { STRUCTURED_DATA_IDS } from '@/constants/structuredDataConstants'

import { generateBreadcrumbList } from '@/utils/generateBreadcrumbsList'

type GenerateBlogStructuredDataProps = {
  name: string
  items?: Array<{
    url: string
    name: string
  }>
}

export function generateBlogStructuredData({
  name,
  items = [],
}: GenerateBlogStructuredDataProps): BlogPageGraph {
  const blog: Blog = {
    '@type': 'Blog',
    '@id': STRUCTURED_DATA_IDS.BLOG,
    name,
    url: `${BASE_URL}${PATHS.BLOG.path}`,
    publisher: { '@id': STRUCTURED_DATA_IDS.ORGANIZATION },
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
    generateBreadcrumbList({ path: PATHS.BLOG.path, title: 'Blog' }),
  ]

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': graph,
  }
}
