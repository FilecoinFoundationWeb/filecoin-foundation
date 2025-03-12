import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import type { Project } from '../../types/ProjectType'

export function generateStructuredData(data: Project) {
  const { seo } = data

  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: `${PATHS.PROJECTS.path}/${data.slug}` as DynamicPathValues,
  })
}
