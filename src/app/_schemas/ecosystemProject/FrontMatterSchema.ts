import { z } from 'zod'

import { BaseDataSchemaKebabCase } from '@/schemas/dynamicDataBaseSchema'

import { CategorySchema, SubcategorySchema } from './CategorySchemas'

// email and full-name are required in the CMS but optional here because some entries still don't have them
export const EcosystemProjectFrontMatter = BaseDataSchemaKebabCase.extend({
  title: z.string(),
  category: CategorySchema,
  email: z.string().optional(),
  'full-name': z.string().optional(),
  subcategories: z.array(SubcategorySchema).optional(),
  tags: z.array(z.string()).optional(),
  description: z.string(),
  tech: z.array(z.string()),
  website: z.string().url().optional(),
  'featured-content': z.string().url().optional(),
  repo: z.string().url().optional(),
  twitter: z.string().url().optional(),
  'video-url': z.string().url().optional(),
  'year-joined': z.coerce.date().optional(),
  'news-update': z.string().optional(),
  content: z.string().optional(),
}).strict()
