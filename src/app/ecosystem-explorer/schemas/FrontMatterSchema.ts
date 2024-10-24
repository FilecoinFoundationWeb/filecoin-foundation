import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'

import { CategorySchema, SubcategorySchema } from './CategorySchemas'

export const EcosystemProjectFrontMatter = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: CategorySchema,
  subcategories: z.array(SubcategorySchema).nonempty(),
  description: z.string(),
  tech: z.array(z.string()),
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
