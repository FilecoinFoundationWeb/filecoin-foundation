import type { WebPage, WithContext } from 'schema-dts'

import type { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

export function generateStructuredData(seo: SeoMetadata): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.ABOUT.path,
  })

  return {
    ...baseData,
    about: ORGANIZATION_SCHEMA_BASE,
  }
}
