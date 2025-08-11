import type { CollectionPage, WebPage } from 'schema-dts'

import type { WebPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { type PathValues } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { WEBSITE_SCHEMA } from '@/constants/structuredDataConstants'

import { makeBreadcrumbs } from './makeBreadcrumbs'

type PageType = WebPage['@type'] | CollectionPage['@type']

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
  const pageIdSuffix = pageType === 'CollectionPage' ? 'page' : 'webpage'

  const fullUrl = `${BASE_URL}${path}`
  const pageId = `${fullUrl}#${pageIdSuffix}`

  const mainEntity: WebPage = {
    '@type': pageType,
    '@id': pageId,
    url: fullUrl,
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_SCHEMA['@id'] },
    ...(about && { about }),
  }

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': [mainEntity, makeBreadcrumbs({ path, title })],
  }
}
