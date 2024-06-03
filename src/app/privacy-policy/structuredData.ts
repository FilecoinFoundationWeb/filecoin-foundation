import { WebPage, WithContext } from 'schema-dts'

import { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'

export const generatePrivacyPolicyStructuredData = (
  seo: SeoMetadata,
): WithContext<WebPage> => {
  const privacyPolicyPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.PRIVACY_POLICY.path,
  })

  return {
    ...privacyPolicyPageBaseData,
  }
}
