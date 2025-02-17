import { z } from 'zod'

import { MarkdownEntryPathSchema } from '@/schemas/MarkdownEntryPathSchema'
import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

export const FrontmatterSchema = PageFrontmatterSchema.extend({
  featured_ecosystem_projects: z.array(MarkdownEntryPathSchema),
})
