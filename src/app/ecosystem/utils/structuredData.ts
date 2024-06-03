import { WebPage, WithContext } from 'schema-dts'

import { SeoMetadata } from '@/types/metadataTypes'

import {
  baseOrganizationSchema,
  generateWebPageStructuredData,
} from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'

export const generateEcosystemPageStructuredData = (
  seo: SeoMetadata,
): WithContext<WebPage> => {
  const ecosystemPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.ECOSYSTEM.path,
  })

  return {
    ...ecosystemPageBaseData,
    publisher: baseOrganizationSchema,
  }
}
