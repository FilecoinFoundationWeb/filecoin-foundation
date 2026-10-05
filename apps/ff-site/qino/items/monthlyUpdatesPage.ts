import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const monthlyUpdatesPageItem = qino.defineItem({
  file: 'pages/filecoin-plus/monthly-updates.md',
  schema: PageFrontmatterSchema,
})
