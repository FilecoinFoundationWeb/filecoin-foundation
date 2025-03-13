import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import type { Project } from '../../types/ProjectType'

export function generateStructuredData({ seo, slug }: Project) {
  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: `${PATHS.PROJECTS.path}/${slug}` as DynamicPathValues,
  })
}
