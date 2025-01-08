import { z } from 'zod'

import { EventBaseFrontMatterSchema } from './EventBaseFrontMatterSchema'

export const ProgramSchema = z
  .object({
    kicker: z.string().optional().default('Explore'),
    title: z.string().optional().default('Events'),
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
