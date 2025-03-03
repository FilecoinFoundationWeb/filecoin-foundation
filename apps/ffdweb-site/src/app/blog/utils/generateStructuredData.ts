import type { WebPage, WithContext } from 'schema-dts'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import type { StructuredDataParams } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export function generateStructuredData(
  metadata: StructuredDataParams,
): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    path: PATHS.BLOG.path,
  })

  return {
    ...baseData,
    about: ORGANIZATION_SCHEMA_BASE,
  }
}
