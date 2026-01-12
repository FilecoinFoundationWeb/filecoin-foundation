import type { Article, CollectionPage, Organization } from 'schema-dts'

import type { ArticleGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import { PATHS, type NextRouteWithoutLocale } from '@/constants/paths'
import {
  BASE_URL,
  FILECOIN_FOUNDATION_URL,
  ORGANIZATION_NAME,
} from '@/constants/siteMetadata'
import { STRUCTURED_DATA_IDS } from '@/constants/structuredDataConstants'

type GenerateCaseStudyPageStructuredDataProps = {
  path: NextRouteWithoutLocale
  headline: string
  description: Article['description']
  image?: string
  datePublished: Date
  dateModified?: Date
  locale?: string
}

export function generateCaseStudyPageStructuredData({
  path,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  locale = 'en',
}: GenerateCaseStudyPageStructuredDataProps): ArticleGraph {
  const url = `${BASE_URL}${path}`

  const organization: Organization = {
    '@type': 'Organization',
    name: ORGANIZATION_NAME,
    url: FILECOIN_FOUNDATION_URL,
  }

  const collectionPage: CollectionPage = {
    '@type': 'CollectionPage',
    '@id': STRUCTURED_DATA_IDS.getPageId(
      PATHS.CASE_STUDIES.path,
      'CollectionPage',
    ),
    url: `${BASE_URL}${PATHS.CASE_STUDIES.path}`,
    name: PATHS.CASE_STUDIES.label,
  }

  const caseStudyArticle: Article = {
    '@type': 'Article',
    '@id': `${url}#article`,
    url,
    headline,
    description,
    image: image ? [image] : undefined,
    datePublished: datePublished.toISOString(),
    dateModified: dateModified?.toISOString() || datePublished.toISOString(),
    author: organization,
    publisher: organization,
    isPartOf: collectionPage,
    inLanguage: locale,
  }

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': [caseStudyArticle],
  }
}
