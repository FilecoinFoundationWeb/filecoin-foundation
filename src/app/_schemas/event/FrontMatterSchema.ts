import { z } from 'zod'

import {
  createCategorySchema,
  getEventsCategorySettings,
} from '@/utils/categoryUtils'

import { BaseDataSchemaKebabCase } from '@/schemas/DynamicDataBaseSchema'
import { ScheduleSchema } from '@/schemas/event/ScheduleSchema'
import { SpeakersSchema } from '@/schemas/event/SpeakerSchema'
import { SponsorsSchema } from '@/schemas/event/SponsorSchema'

const { validCategoryIds } = getEventsCategorySettings()

const categorySchema = createCategorySchema(validCategoryIds)

export const EventFrontMatterSchema = BaseDataSchemaKebabCase.extend({
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
      title: z.string(),
      'embed-link': z.string().url(),
    })
    .optional(),
  'start-date': z.coerce.date(),
  'end-date': z.coerce.date().optional(),
  schedule: ScheduleSchema.optional(),
  speakers: SpeakersSchema.optional(),
  sponsors: SponsorsSchema.optional(),
}).strict()
