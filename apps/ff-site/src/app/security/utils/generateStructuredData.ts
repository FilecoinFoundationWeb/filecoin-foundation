import type { SeoMetadata } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'
import type { WebPage, WithContext } from 'schema-dts'

import { PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'


export function generateStructuredData(seo: SeoMetadata): WithContext<WebPage> {
  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.SECURITY.path,
  })
}
