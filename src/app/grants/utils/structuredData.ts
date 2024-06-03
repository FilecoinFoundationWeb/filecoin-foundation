import { WebPage, WithContext } from 'schema-dts'

import { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'

export const generateGrantsPageStructuredData = (
  seo: SeoMetadata,
): WithContext<WebPage> => {
  const grantsPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.GRANTS.path,
  })

  return {
    ...grantsPageBaseData,
  }
}
