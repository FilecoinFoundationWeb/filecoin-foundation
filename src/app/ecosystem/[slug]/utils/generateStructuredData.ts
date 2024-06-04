import { WebPage, WithContext } from 'schema-dts'

import { generateWebPageStructuredData, seo } from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'

export function generateStructuredData(): WithContext<WebPage> {
  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.ECOSYSTEM.path,
  })
}
