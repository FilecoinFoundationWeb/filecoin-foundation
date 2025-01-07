import { z } from 'zod'

import { extractSlugFromFilename } from '@/utils/fileUtils'

import { getEcosystemProjectsData } from './getEcosystemProjectData'

export function createFeaturedProjectsZodField(errorMessage: string) {
  return z
    .array(z.string())
    .transform((paths) => {
      const ecosystemProjects = getEcosystemProjectsData()
      const slugs = paths.map(extractSlugFromFilename)
      return ecosystemProjects.filter((item) => slugs.includes(item.slug))
    })
    .refine((filtered) => filtered.length > 0, {
      message: errorMessage,
    })
}
