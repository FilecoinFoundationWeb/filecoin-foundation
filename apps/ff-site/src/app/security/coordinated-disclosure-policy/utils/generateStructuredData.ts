import { PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import type { SeoMetadata } from '@/schemas/SeoMetadataSchema'

export function generateStructuredData(seo: SeoMetadata) {
  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.COORDINATED_DISCLOSURE_POLICY.path,
  })
}
