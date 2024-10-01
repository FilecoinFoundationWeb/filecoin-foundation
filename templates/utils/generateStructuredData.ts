;`import type { WebPage, WithContext } from 'schema-dts'

import type { SeoMetadata } from '@/schemas/seoMetadataSchema'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import { PATHS } from '@/constants/paths'

export function generateStructuredData(seo: SeoMetadata): WithContext<WebPage> {
  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.__PATH_NAME__.path,
  })
}`
