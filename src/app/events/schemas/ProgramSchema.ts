import { z } from 'zod'

import { EventBaseFrontMatterSchema } from './EventBaseFontMatterSchema'

export const ProgramSchema = z
  .object({
    title: z.string().optional(),
    kicker: z.string().optional(),
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
