import type { WebPage, WithContext } from 'schema-dts'

import type { SeoMetadata } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'
import { sortPostsByDateDesc } from '@filecoin-foundation/utils/sortBlogPosts'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { getOrganizationSchemaBase } from '@/constants/structuredDataConstants'

import type { MonthlyUpdate } from '@/qino/collections/monthlyUpdates'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export async function generateStructuredData(
  updates: Array<MonthlyUpdate>,
  seo: SeoMetadata,
): Promise<WithContext<WebPage>> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.FIL_PLUS_MONTHLY_UPDATES.path,
  })

  const mostRecentUpdates = sortPostsByDateDesc(updates)
  const fiveMostRecentUpdates = mostRecentUpdates.slice(0, 5)

  return {
    ...baseData,
    publisher: await getOrganizationSchemaBase(),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: fiveMostRecentUpdates.map((update, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          '@id': `${BASE_URL}${PATHS.FIL_PLUS_MONTHLY_UPDATES.path}/${update._meta.slug}`,
          headline: update.title,
          description: update.description,
          image: update.image?.src,
          url: `${BASE_URL}${PATHS.FIL_PLUS_MONTHLY_UPDATES.path}/${update._meta.slug}`,
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
