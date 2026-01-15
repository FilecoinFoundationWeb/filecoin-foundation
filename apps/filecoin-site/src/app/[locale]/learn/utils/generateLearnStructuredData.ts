import type { CollectionPage, Thing } from 'schema-dts'

import type { CollectionPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { STRUCTURED_DATA_IDS } from '@/constants/structuredDataConstants'

import { generateBreadcrumbList } from '@/utils/generateBreadcrumbsList'

type GenerateLearnStructuredDataProps = {
  name: string
  description: string
  about?: Array<string>
}

export function generateLearnStructuredData({
  name,
  description,
  about = [],
}: GenerateLearnStructuredDataProps): CollectionPageGraph {
  const learnPage: CollectionPage = {
    '@type': 'CollectionPage',
    '@id': STRUCTURED_DATA_IDS.getPageId(PATHS.LEARN.path, 'CollectionPage'),
    url: `${BASE_URL}${PATHS.LEARN.path}`,
    name,
    description,
    isPartOf: { '@id': STRUCTURED_DATA_IDS.WEBSITE },
    ...(about.length > 0 && {
      about: about.map<Thing>((topic) => ({
        '@type': 'Thing',
        name: topic,
      })),
    }),
  }

  const graph: CollectionPageGraph['@graph'] = [
    learnPage,
    generateBreadcrumbList({
      path: PATHS.LEARN.path,
      title: PATHS.LEARN.label,
    }),
  ]

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': graph,
  }
}
