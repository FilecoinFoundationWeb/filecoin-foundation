import type { WebPage, WithContext } from 'schema-dts'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import type { StructuredDataParams } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export function generateStructuredData(
  seo: StructuredDataParams,
): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: PATHS.LEARNING_RESOURCES.path,
  })

  return {
    ...baseData,
    about: ORGANIZATION_SCHEMA_BASE,
  }
}
