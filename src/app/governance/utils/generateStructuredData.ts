import type { WebPage, WithContext } from 'schema-dts'

import type { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import { PATHS } from '@/constants/paths'
import { BASE_ORGANIZATION_SCHEMA } from '@/constants/structuredDataConstants'

export function generateStructuredData(seo: SeoMetadata): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.GOVERNANCE.path,
  })

  return {
    ...baseData,
    about: BASE_ORGANIZATION_SCHEMA,
  }
}
