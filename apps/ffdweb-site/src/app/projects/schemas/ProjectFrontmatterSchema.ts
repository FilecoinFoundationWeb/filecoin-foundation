import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'
import { z } from 'zod'

export const ProjectFrontmatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  description: z.string(),
  'external-link': z.string().optional(),
  'featured-content': z.string().optional(),
  'has-collaborations': z.boolean().optional().default(false),
}).strict()
