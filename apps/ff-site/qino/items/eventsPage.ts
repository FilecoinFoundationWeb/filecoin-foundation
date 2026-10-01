import { FeaturedPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const eventsPageItem = qino.defineItem({
  file: '/pages/events.md',
  schema: FeaturedPageFrontmatterSchema,
})
