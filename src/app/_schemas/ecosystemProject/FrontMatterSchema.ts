import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'

import { CategorySchema, SubcategorySchema } from './CategorySchemas'

export const EcosystemProjectFrontMatter = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: CategorySchema,
  subcategories: z.array(SubcategorySchema).optional(),
  tags: z.array(z.string()).optional(),
  description: z.string(),
  tech: z.array(z.string()),
  website: z.string().url().optional(),
  featuredContent: z.string().url().optional(),
  repo: z.string().url().optional(),
  twitter: z.string().url().optional(),
  videoUrl: z.string().url().optional(),
  yearJoined: z.coerce.date().optional(),
  newsUpdate: z.string().optional(),
  content: z.string().optional(),
})
