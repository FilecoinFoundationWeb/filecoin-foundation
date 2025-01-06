import { z } from 'zod'

import { extractSlugFromFilename } from '@/utils/fileUtils'

import { MarkdownPathSchema } from '@/schemas/FrontmatterSchema'

import { getEcosystemProjectsData } from './getEcosystemProjectData'

export function createFeaturedProjectsZodField(errorMessage: string) {
  return z
    .array(MarkdownPathSchema)
    .transform((paths) => {
      const ecosystemProjects = getEcosystemProjectsData()
      const slugs = paths.map(extractSlugFromFilename)
      return ecosystemProjects.filter((item) => slugs.includes(item.slug))
    })
    .refine((filtered) => filtered.length > 0, {
      message: errorMessage,
    })
}
