import { UTCDate } from '@date-fns/utc'

import type { Event } from '../../types/eventType'

export function getSortedValidDays(schedule: NonNullable<Event['schedule']>) {
  return schedule.days
    .filter((day) => day.events.length > 0)
    .map((day) => ({
      ...day,
      events: day.events.sort(
        (a, b) =>
          new UTCDate(a.start).getTime() - new UTCDate(b.start).getTime(),
      ),
    }))
    .sort(
      (a, b) => new UTCDate(a.date).getTime() - new UTCDate(b.date).getTime(),
    )
}
