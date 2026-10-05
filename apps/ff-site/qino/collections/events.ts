import type { Infer } from '@qino/cms'

import { camelcaseKeysDeep } from '@/utils/camelcaseKeysDeep'
import { withSeoTitleFallback } from '@/utils/withSeoTitleFallback'

import qino from '../'

import { METADATA_TITLE_SUFFIX } from '@/events/constants/metadata'
import { EventFrontmatterSchema } from '@/events/schemas/EventFrontmatterSchema'
import { validateEventDates } from '@/events/utils/validateEventDates'

export const eventCollection = qino.defineCollection({
  directory: 'events',
  extension: '.md',
  schema: EventFrontmatterSchema.transform(camelcaseKeysDeep)
    .superRefine(validateEventDates)
    .transform((event) => withSeoTitleFallback(event, METADATA_TITLE_SUFFIX)),
})

export type Event = Infer<typeof eventCollection>['output']
