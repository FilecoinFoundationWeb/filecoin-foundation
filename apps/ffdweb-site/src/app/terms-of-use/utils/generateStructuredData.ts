import type { WebPage, WithContext } from 'schema-dts'

import type { StructuredDataParams } from '@/types/structuredDataParams'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export function generateStructuredData(
  seo: StructuredDataParams,
): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.TERMS_OF_USE.path,
  })

  return {
    ...baseData,
    about: ORGANIZATION_SCHEMA_BASE,
  }
}
