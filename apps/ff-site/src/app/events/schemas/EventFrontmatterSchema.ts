import { z } from 'zod'

import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'
import { createEnumSchema } from '@filecoin-foundation/utils/zodUtils'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

import { EventBaseFrontmatterSchema } from './EventBaseFrontmatterSchema'
import { LocationSchema } from './LocationSchema'
import { ProgramSchema } from './ProgramSchema'
import { RecapSchema } from './RecapSchema'
import { ScheduleSchema } from './ScheduleSchema'
import { SpeakersSchema } from './SpeakerSchema'
import { SponsorsSchema } from './SponsorSchema'

const { validIds: validCategoryIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'event_entries',
  fieldName: 'category',
})

const CategorySchema = createEnumSchema(validCategoryIds)

export const EventFrontmatterSchema = DynamicBaseDataSchema.extend({
  ...EventBaseFrontmatterSchema.shape,
  category: CategorySchema,
  location: LocationSchema,
  'luma-calendar-link': z.string().url().optional(),
  program: ProgramSchema.optional(),
  recap: RecapSchema.optional(),
  schedule: ScheduleSchema.optional(),
  speakers: SpeakersSchema.optional(),
  sponsors: SponsorsSchema.optional(),
}).strict()
