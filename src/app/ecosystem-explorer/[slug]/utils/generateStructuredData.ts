import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import type { EcosystemProject } from '../../types/ecosystemProjectType'

export function generateStructuredData(data: EcosystemProject) {
  const { seo } = data

  return generateWebPageStructuredData({
    title: data.seo.title || `${data.title} - Filecoin Ecosystem Project`,
    description: seo.description,
    path: `${PATHS.ECOSYSTEM_EXPLORER.path}/${data.slug}` as DynamicPathValues,
  })
}
