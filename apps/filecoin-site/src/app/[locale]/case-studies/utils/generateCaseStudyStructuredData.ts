import type { CollectionPage, ItemList, ListItem } from 'schema-dts'

import type { CollectionPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import { PATHS, type NextRouteWithoutLocale } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { STRUCTURED_DATA_IDS } from '@/constants/structuredDataConstants'

import { generateBreadcrumbList } from '@/utils/generateBreadcrumbsList'

type GenerateCaseStudyStructuredDataProps = {
  name: string
  description: string
  items?: Array<{
    path: NextRouteWithoutLocale
    headline: string
    description?: string
    image?: string
  }>
}

export function generateCaseStudyStructuredData({
  name,
  description,
  items = [],
}: GenerateCaseStudyStructuredDataProps): CollectionPageGraph {
  const mainEntity: ItemList | undefined =
    items.length > 0
      ? {
          '@type': 'ItemList',
          name,
          itemListElement: items.map<ListItem>((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Article',
              '@id': STRUCTURED_DATA_IDS.getCaseStudyId(item.path),
              url: `${BASE_URL}${item.path}`,
              headline: item.headline,
              description: item.description,
              image: item.image,
              author: {
                '@type': 'Organization',
                name: ORGANIZATION_NAME,
                url: BASE_URL,
              },
              publisher: {
                '@type': 'Organization',
                name: ORGANIZATION_NAME,
                url: BASE_URL,
              },
            },
          })),
        }
      : undefined

  const caseStudy: CollectionPage = {
    '@type': 'CollectionPage',
    url: `${BASE_URL}${PATHS.CASE_STUDIES.path}`,
    name,
    description,
  }

  const graph: CollectionPageGraph['@graph'] = [
    caseStudy,
    ...(mainEntity ? [mainEntity] : []),
    generateBreadcrumbList({
      path: PATHS.CASE_STUDIES.path,
      title: PATHS.CASE_STUDIES.label,
    }),
  ]

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': graph,
  }
}
