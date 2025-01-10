import { createFeaturedEntryPageSchema } from '@/utils/zod/createFeaturedEntryPageSchema'

import { getEventData } from '../utils/getEventData'

export const FrontmatterSchema = createFeaturedEntryPageSchema(getEventData)
