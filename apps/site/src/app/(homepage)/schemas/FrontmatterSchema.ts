import { z } from 'zod'

import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'
import { MarkdownEntryPathSchema } from '@/schemas/MarkdownEntryPathSchema'

export const FrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_ecosystem_projects: z.array(MarkdownEntryPathSchema),
})
