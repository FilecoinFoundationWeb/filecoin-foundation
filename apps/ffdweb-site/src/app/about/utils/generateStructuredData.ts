import type { WebPage, WithContext } from 'schema-dts'

import type { structuredDataParams } from '@/types/structuredDataParams'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export function generateStructuredData(
  seo: structuredDataParams,
): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: PATHS.ABOUT.path,
  })

  return {
    ...baseData,
    about: ORGANIZATION_SCHEMA_BASE,
  }
}
