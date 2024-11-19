import { z } from 'zod'

import { getFieldSettings } from '@/utils/cmsFieldUtils'
import { createEnumSchema } from '@/utils/zodUtils'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'

import { ScheduleSchema } from './ScheduleSchema'
import { SpeakersSchema } from './SpeakerSchema'
import { SponsorsSchema } from './SponsorSchema'

const { validIds: validCategoryIds } = getFieldSettings({
  collectionName: 'event_entries',
  fieldName: 'category',
})
const { validIds: validRegionIds } = getFieldSettings({
  collectionName: 'event_entries',
  fieldName: 'location.region',
})

const CategorySchema = createEnumSchema(validCategoryIds)
const RegionSchema = createEnumSchema(validRegionIds)

export const EventFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: CategorySchema,
  description: z.string().optional(),
  location: z
    .object({
      primary: z.string(),
      region: RegionSchema.optional(),
    })
    .optional(),
  'external-link': z
    .object({
      url: z.string().url(),
      text: z.string().optional(),
    })
    .optional(),
  'luma-calendar-link': z.string().url().optional(),
  'luma-events-section': z
    .object({
      title: z.string().optional(),
      'embed-link': z.string().url(),
    })
    .optional(),
  'start-date': z.coerce.date(),
  'end-date': z.coerce.date().optional(),
  schedule: ScheduleSchema.optional(),
  speakers: SpeakersSchema.optional(),
  sponsors: SponsorsSchema.optional(),
  'recap-youtube-embed-url': z.string().url().optional(),
  'recap-youtube-playlist-url': z.string().url().optional(),
}).strict()
