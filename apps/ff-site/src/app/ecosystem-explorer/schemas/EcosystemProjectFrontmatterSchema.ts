import { z } from 'zod'

import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'

import { CategorySchema } from './CategorySchemas'
import { ProjectTechSchema } from './ProjectTechSchema'
import { YearJoinedSchema } from './YearJoinedSchema'

const EcosystemProjectFrontmatterFields = {
  title: z.string(),
  category: CategorySchema,
  description: z.string(),
  tech: ProjectTechSchema,
  website: z.url().optional(),
  'featured-content': z.url().optional(),
  repo: z.url().optional(),
  twitter: z.url().optional(),
  'video-url': z.url().optional(),
  'year-joined': YearJoinedSchema.optional(),
  content: z.string().optional(),
  email: z.string(),
  'full-name': z.string(),
}

export const EcosystemProjectFrontmatterSchema = z.strictObject({
  ...DynamicBaseDataSchema.shape,
  ...EcosystemProjectFrontmatterFields,
})
