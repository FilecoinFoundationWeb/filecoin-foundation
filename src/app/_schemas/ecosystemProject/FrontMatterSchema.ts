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
  website: z.string().optional(),
  featuredContent: z.string().optional(),
  repo: z.string().optional(),
  twitter: z.string().optional(),
  videoUrl: z.string().optional(),
  yearJoined: z.coerce.date().optional(),
  newsUpdate: z.string().optional(),
  content: z.string().optional(),
})
