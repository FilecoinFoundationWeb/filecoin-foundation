import type { Article } from 'schema-dts'

import type { ArticleGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import { PATHS, type NextRouteWithoutLocale } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { STRUCTURED_DATA_IDS } from '@/constants/structuredDataConstants'

import { generateBreadcrumbList } from '@/utils/generateBreadcrumbsList'

type GenerateCaseStudyPageStructuredDataProps = {
  path: NextRouteWithoutLocale
  headline: string
  description: Article['description']
  image?: Article['image'] // #todo: Make image required
}

export function generateCaseStudyPageStructuredData({
  path,
  headline,
  description,
  image,
}: GenerateCaseStudyPageStructuredDataProps): ArticleGraph {
  const url = `${BASE_URL}${path}`

  const caseStudyArticle: Article = {
    '@type': 'Article',
    headline,
    description,
    author: { '@id': STRUCTURED_DATA_IDS.ORGANIZATION },
    publisher: { '@id': STRUCTURED_DATA_IDS.ORGANIZATION },
    mainEntityOfPage: { '@id': url },
    ...(image && { image }), // #todo: Make image required
  }

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': [
      caseStudyArticle,
      generateBreadcrumbList({
        path,
        title: headline,
        parentPaths: [
          { path: PATHS.CASE_STUDIES.path, title: PATHS.CASE_STUDIES.label },
        ],
      }),
    ],
  }
}
