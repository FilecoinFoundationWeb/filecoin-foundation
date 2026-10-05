import { camelcaseKeysDeep } from '@/utils/camelcaseKeysDeep'

import { FeaturedPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'
import { eventCollection } from '../collections/events'

export const eventsPageItem = qino.defineItem({
  file: 'pages/events.md',
  schema: FeaturedPageFrontmatterSchema.transform(camelcaseKeysDeep),
  relations: { featuredEntry: eventCollection },
  views: (view) => ({ default: view({ resolveRelations: 1 }) }),
})
