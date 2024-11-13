import type { WebPage, WithContext } from 'schema-dts'

import { PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import type { SeoMetadata } from '@/schemas/SeoMetadataSchema'

export function generateStructuredData(seo: SeoMetadata): WithContext<WebPage> {
  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.BUG_BOUNTY.path,
  })
}
