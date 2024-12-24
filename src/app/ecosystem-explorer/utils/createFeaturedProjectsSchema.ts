import { z } from 'zod'

import { extractSlugFromFilename } from '@/utils/fileUtils'

import {
  BaseFrontmatterSchema,
  MarkdownPathSchema,
} from '@/schemas/FrontmatterSchema'

import { getEcosystemProjectsData } from '../utils/getEcosystemProjectData'

export function createFeaturedProjectsSchema(
  fieldName: string,
  errorMessage: string,
) {
  return BaseFrontmatterSchema.extend({
    [fieldName]: z
      .array(MarkdownPathSchema)
      .transform((paths) => {
        const items = getEcosystemProjectsData()
        const slugs = paths.map(extractSlugFromFilename)
        return items.filter((item) => slugs.includes(item.slug))
      })
      .refine((filtered) => filtered.length > 0, {
        message: errorMessage,
      }),
  })
}
