import type { WebPage, WithContext } from 'schema-dts'

import { type SeoMetadata } from '@/types/metadataTypes'

import { type PathValues, type DynamicPathValues } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { SCHEMA_CONTEXT_URL } from '@/constants/structuredDataConstants'

type GenerateWebPageStructuredDataProps = {
  title: SeoMetadata['title']
  description: SeoMetadata['description']
  path: PathValues | DynamicPathValues
}

export function generateWebPageStructuredData({
  title,
  description,
  path,
}: GenerateWebPageStructuredDataProps): WithContext<WebPage> {
  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@type': 'WebPage',
    name: title,
    description,
    url: `${BASE_URL}${path}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: `${BASE_URL}${path}`,
        },
      ],
    },
  }
}
