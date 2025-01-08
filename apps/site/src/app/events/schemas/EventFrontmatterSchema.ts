import { z } from 'zod'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'
import { createEnumSchema } from '@/utils/zodUtils'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'

import { EventBaseFrontMatterSchema } from './EventBaseFrontMatterSchema'
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
  ...EventBaseFrontMatterSchema.shape,
  category: CategorySchema,
  location: LocationSchema,
  'luma-calendar-link': z.string().url().optional(),
  program: ProgramSchema.optional(),
  recap: RecapSchema.optional(),
  schedule: ScheduleSchema.optional(),
  speakers: SpeakersSchema.optional(),
  sponsors: SponsorsSchema.optional(),
}).strict()
