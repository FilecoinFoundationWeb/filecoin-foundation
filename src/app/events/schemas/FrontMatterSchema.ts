import { z } from 'zod'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'
import { createEnumSchema } from '@/utils/zodUtils'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'

import { EventBaseFrontMatterSchema } from './EventBaseFontMatterSchema'
import { LocationSchema } from './LocationSchema'
import { ProgramSchema } from './ProgramSchema'
import { ScheduleSchema } from './ScheduleSchema'
import { SpeakersSchema } from './SpeakerSchema'
import { SponsorsSchema } from './SponsorSchema'

const { validIds: validCategoryIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'event_entries',
  fieldName: 'category',
})

const CategorySchema = createEnumSchema(validCategoryIds)

export const EventFrontMatterSchema = DynamicBaseDataSchema.extend({
  ...EventBaseFrontMatterSchema.shape,
  category: CategorySchema,
  location: LocationSchema,
  'luma-calendar-link': z.string().url().optional(),
  program: ProgramSchema.optional(),
  schedule: ScheduleSchema.optional(),
  speakers: SpeakersSchema.optional(),
  sponsors: SponsorsSchema.optional(),
  'recap-youtube-embed-url': z.string().url().optional(),
  'recap-youtube-playlist-url': z.string().url().optional(),
}).strict()
