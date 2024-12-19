import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'

import { CategorySchema } from './CategorySchemas'
import { ProjectTechSchema } from './ProjectTechSchema'

export const EcosystemProjectFrontMatter = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: CategorySchema,
  description: z.string(),
  tech: ProjectTechSchema,
  website: z.string().url().optional(),
  'featured-content': z.string().url().optional(),
  repo: z.string().url().optional(),
  twitter: z.string().url().optional(),
  'video-url': z.string().url().optional(),
  'year-joined': z.coerce.date().optional(),
  content: z.string().optional(),
  email: z.string(),
  'full-name': z.string(),
}).strict()
