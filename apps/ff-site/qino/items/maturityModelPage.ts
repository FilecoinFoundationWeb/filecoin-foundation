import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const maturityModelPageItem = qino.defineItem({
  file: 'pages/security/maturity-model.md',
  schema: PageFrontmatterSchema,
})
