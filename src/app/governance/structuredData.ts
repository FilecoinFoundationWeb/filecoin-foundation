import { WebPage, WithContext } from 'schema-dts'

import { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'

export const generateGovernancePageStructuredData = (
  seo: SeoMetadata,
): WithContext<WebPage> => {
  const governancePageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.GOVERNANCE.path,
  })

  return {
    ...governancePageBaseData,
  }
}
