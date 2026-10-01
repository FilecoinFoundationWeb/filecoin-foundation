import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const bugBountyPageItem = qino.defineItem({
  file: '/pages/security/bug-bounty/bug-bounty.md',
  schema: PageFrontmatterSchema,
})
