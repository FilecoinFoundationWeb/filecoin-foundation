import { WebPage, WithContext } from 'schema-dts'

import { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import { PATHS } from '@/constants/paths'
import { BASE_ORGANIZATION_SCHEMA } from '@/constants/structuredDataConstants'

export function generateStructuredData(seo: SeoMetadata): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.ECOSYSTEM.path,
  })

  return {
    ...baseData,
    publisher: BASE_ORGANIZATION_SCHEMA,
  }
}
