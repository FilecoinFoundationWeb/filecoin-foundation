import { z } from 'zod'

import {
  createCategorySchema,
  getEventsCategorySettings,
} from '@/utils/categoryUtils'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'

import { ScheduleSchema } from './ScheduleSchema'
import { SpeakersSchema } from './SpeakerSchema'
import { SponsorsSchema } from './SponsorSchema'

const { validCategoryIds } = getEventsCategorySettings()

const categorySchema = createCategorySchema(validCategoryIds)

export const EventFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: categorySchema,
  description: z.string().optional(),
  location: z.string(),
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
}).strict()
