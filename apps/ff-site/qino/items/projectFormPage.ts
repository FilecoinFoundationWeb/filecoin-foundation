import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const projectFormPageItem = qino.defineItem({
  file: 'pages/ecosystem-explorer/project-form.md',
  schema: PageFrontmatterSchema,
})
