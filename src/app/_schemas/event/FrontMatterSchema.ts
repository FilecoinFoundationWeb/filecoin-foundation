import { z } from 'zod'

import {
  createCategorySchema,
  getEventsCategorySettings,
} from '@/utils/categoryUtils'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'
import { SpeakersSchema } from '@/schemas/event/SpeakerSchema'
import { SponsorsSchema } from '@/schemas/event/SponsorSchema'

const { validCategoryIds } = getEventsCategorySettings()

const categorySchema = createCategorySchema(validCategoryIds)

export const EventFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: categorySchema,
  description: z.string().optional(),
  location: z.string(),
  externalLink: z
    .object({
      url: z.string().url(),
      text: z.string().optional(),
    })
    .optional(),
  lumaCalendarLink: z.string().url().optional(),
  lumaEventsSection: z
    .object({
      title: z.string(),
      embedLink: z.string().url(),
    })
    .optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  speakers: SpeakersSchema.optional(),
  sponsors: SponsorsSchema.optional(),
})
