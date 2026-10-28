import { type DynamicPathValues, PATHS } from '@/constants/paths'

import type { Project } from '@/qino/collections/projects'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export function generateStructuredData({ seo, _meta: { slug } }: Project) {
  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: `${PATHS.PROJECTS.path}/${slug}` as DynamicPathValues,
  })
}
