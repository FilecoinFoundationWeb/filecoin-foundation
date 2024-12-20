import { z } from 'zod'

const CalendarEventSchema = z.object({
  id: z.string(),
  start: z.object({ dateTime: z.string() }),
  end: z.object({ dateTime: z.string() }),
  htmlLink: z.string(),
  summary: z.string(),
})

export const CalendarEventsSchema = z.object({
  items: z.array(CalendarEventSchema),
})

export type CalendarEventType = z.infer<typeof CalendarEventSchema>
