import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'

import { CategorySchema } from './CategorySchemas'
import { ProjectTechSchema } from './ProjectTechSchema'
import { YearJoinedSchema } from './YearJoinedSchema'

export const EcosystemProjectFrontmatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: CategorySchema,
  description: z.string(),
  tech: ProjectTechSchema,
  website: z.string().url().optional(),
  'featured-content': z.string().url().optional(),
  repo: z.string().url().optional(),
  twitter: z.string().url().optional(),
  'video-url': z.string().url().optional(),
  'year-joined': YearJoinedSchema.optional(),
  content: z.string().optional(),
  email: z.string(),
  'full-name': z.string(),
}).strict()
