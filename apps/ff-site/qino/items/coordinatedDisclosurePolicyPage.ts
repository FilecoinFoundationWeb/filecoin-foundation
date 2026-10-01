import { z } from 'zod'

import { MarkdownPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const coordinatedDisclosurePolicyPageItem = qino.defineItem({
  file: '/pages/security/coordinated-disclosure-policy.md',
  schema: z.object({
    ...MarkdownPageFrontmatterSchema.shape,
    markdown: z.string(),
  }),
})
