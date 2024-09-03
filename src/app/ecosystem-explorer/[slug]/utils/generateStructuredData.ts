import type { EcosystemProject } from '@/types/ecosystemProjectType'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export function generateStructuredData(data: EcosystemProject) {
  const { seo } = data

  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: `${PATHS.ECOSYSTEM_EXPLORER.path}/${data.slug}` as DynamicPathValues,
  })
}
