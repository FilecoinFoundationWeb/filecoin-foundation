import { z } from 'zod'

import { EventBaseFrontMatterSchema } from './EventBaseFontMatterSchema'

export const ProgramSchema = z
  .object({
    kicker: z.string().default('Explore').optional(),
    title: z.string().default('Events').optional(),
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
