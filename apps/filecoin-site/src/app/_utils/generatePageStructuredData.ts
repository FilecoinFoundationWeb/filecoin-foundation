import type { WebPage } from 'schema-dts'

import type { WebPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { type PathValues } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import {
  STRUCTURED_DATA_IDS,
  WEBSITE_SCHEMA,
} from '@/constants/structuredDataConstants'

import { generateBreadcrumbList } from './generateBreadcrumbsList'

type PageType = 'WebPage' | 'CollectionPage'

type GenerateWebPageStructuredDataProps = StructuredDataParams & {
  path: PathValues
  pageType: PageType
  about?: Array<{ '@type': 'Thing'; name: string }>
}

export function generatePageStructuredData({
  title,
  description,
  path,
  pageType,
  about,
}: GenerateWebPageStructuredDataProps): WebPageGraph {
  const fullUrl = `${BASE_URL}${path}`

  const pageSchema: WebPage = {
    '@type': pageType,
    '@id': STRUCTURED_DATA_IDS.getPageId(path, pageType),
    url: fullUrl,
    name: title,
    description,
    ...(about && { about }),
    isPartOf: { '@id': WEBSITE_SCHEMA['@id']! },
  }

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': [pageSchema, generateBreadcrumbList({ path, title })],
  }
}
