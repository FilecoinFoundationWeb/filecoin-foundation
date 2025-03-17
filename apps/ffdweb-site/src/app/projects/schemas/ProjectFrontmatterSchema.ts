import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'
import { z } from 'zod'

export const ProjectFrontmatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  website: z.string(),
  'featured-content': z.string().optional(),
  'active-partnership': z.boolean().optional().default(false),
}).strict()
