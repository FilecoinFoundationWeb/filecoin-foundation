import { MarkdownPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const privacyPolicyPageItem = qino.defineItem({
  file: 'pages/privacy-policy.md',
  schema: MarkdownPageFrontmatterSchema,
})
