import { type DynamicPathValues, PATHS } from '@/constants/paths'

import type { EcosystemProject } from '@/qino/collections/ecosystemProjects'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export function generateStructuredData(data: EcosystemProject) {
  const { seo } = data

  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: `${PATHS.ECOSYSTEM_EXPLORER.path}/${data._meta.slug}` as DynamicPathValues,
  })
}
