import type { SeoMetadata } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'

import { PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'


export function generateStructuredData(seo: SeoMetadata) {
  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.PRIVACY_POLICY.path,
  })
}
