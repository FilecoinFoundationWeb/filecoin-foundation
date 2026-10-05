import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const govhubPageItem = qino.defineItem({
  file: 'pages/governance/govhub.md',
  schema: PageFrontmatterSchema,
})
