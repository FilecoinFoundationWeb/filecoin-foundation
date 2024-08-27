import type { WebPage, WithContext } from 'schema-dts'

import type { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import { PATHS } from '@/constants/paths'

export function generateStructuredData(seo: SeoMetadata): WithContext<WebPage> {
  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.BUG_BOUNTY_PROGRAM.path,
  })
}
