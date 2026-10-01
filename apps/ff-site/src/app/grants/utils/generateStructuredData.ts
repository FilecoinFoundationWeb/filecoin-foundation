import type { WebPage, WithContext } from 'schema-dts'

import type { SeoMetadata } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'

import { PATHS } from '@/constants/paths'
import { getOrganizationSchemaBase } from '@/constants/structuredDataConstants'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export async function generateStructuredData(
  seo: SeoMetadata,
): Promise<WithContext<WebPage>> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.GRANTS.path,
  })

  return {
    ...baseData,
    about: await getOrganizationSchemaBase(),
  }
}
