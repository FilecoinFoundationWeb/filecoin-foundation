import type { WebPage, WithContext } from 'schema-dts'

import type { SeoMetadata } from '@/types/metadataTypes'

import { PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export function generateStructuredData(seo: SeoMetadata): WithContext<WebPage> {
  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.ECOSYSTEM_EXPLORER.path,
  })
}
