import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const securityPageItem = qino.defineItem({
  file: 'pages/security/security.md',
  schema: PageFrontmatterSchema,
})
