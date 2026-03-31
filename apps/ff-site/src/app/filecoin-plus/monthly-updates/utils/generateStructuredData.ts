import type { WebPage, WithContext } from 'schema-dts'

import type { SeoMetadata } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'
import { sortPostsByDateDesc } from '@filecoin-foundation/utils/sortBlogPosts'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import type { MonthlyUpdate } from '../types/monthlyUpdateType'

export function generateStructuredData(
  updates: Array<MonthlyUpdate>,
  seo: SeoMetadata,
): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.FIL_PLUS_MONTHLY_UPDATES.path,
  })

  const mostRecentUpdates = sortPostsByDateDesc(updates)
  const fiveMostRecentUpdates = mostRecentUpdates.slice(0, 5)

  return {
    ...baseData,
    publisher: ORGANIZATION_SCHEMA_BASE,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: fiveMostRecentUpdates.map((update, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          '@id': `${BASE_URL}${PATHS.FIL_PLUS_MONTHLY_UPDATES.path}/${update.slug}`,
          headline: update.title,
          description: update.description,
          image: update.image?.src,
          url: `${BASE_URL}${PATHS.FIL_PLUS_MONTHLY_UPDATES.path}/${update.slug}`,
          author: {
            '@type': 'Organization',
            name: ORGANIZATION_NAME,
            url: BASE_URL,
          },
        },
      })),
    },
  }
}
