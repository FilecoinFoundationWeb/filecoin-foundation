import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const governancePageItem = qino.defineItem({
  file: '/pages/governance/governance.md',
  schema: PageFrontmatterSchema,
})
