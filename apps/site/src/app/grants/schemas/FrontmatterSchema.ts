import { z } from 'zod'

import { MarkdownEntryPathSchema } from '@/schemas/MarkdownEntryPathSchema'
import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

export const FrontmatterSchema = PageFrontmatterSchema.extend({
  featured_grant_graduates: z.array(MarkdownEntryPathSchema),
})
