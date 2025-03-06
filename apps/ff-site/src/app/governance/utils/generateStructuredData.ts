import type { SeoMetadata } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'
import type { WebPage, WithContext } from 'schema-dts'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'


export function generateStructuredData(seo: SeoMetadata): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.GOVERNANCE.path,
  })

  return {
    ...baseData,
    about: ORGANIZATION_SCHEMA_BASE,
  }
}
