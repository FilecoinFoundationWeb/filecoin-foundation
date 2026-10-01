import { z } from 'zod'

import { MarkdownPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const employeePrivacyPolicyPageItem = qino.defineItem({
  file: '/pages/employee-privacy-policy.md',
  schema: z.object({
    ...MarkdownPageFrontmatterSchema.shape,
    markdown: z.string(),
  }),
})
