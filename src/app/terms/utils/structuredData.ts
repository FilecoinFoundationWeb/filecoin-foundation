import { WebPage, WithContext } from 'schema-dts'

import { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'

export const generateTermsStructuredData = (
  seo: SeoMetadata,
): WithContext<WebPage> => {
  const termsPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.TERMS.path,
  })

  return {
    ...termsPageBaseData,
  }
}
