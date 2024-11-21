import { z } from 'zod'

import { EventBaseFrontMatterSchema } from './EventBaseFontMatterSchema'

export const EventSectionSchema = z
  .object({
    title: z.string().optional(),
    events: z
      .array(
        EventBaseFrontMatterSchema.extend({
          location: z.string(),
        }),
      )
      .nonempty(),
  })
  .strict()
  .optional()
