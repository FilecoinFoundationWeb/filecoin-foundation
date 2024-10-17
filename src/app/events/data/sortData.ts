import type { Event } from '@/types/eventType'
import type { SortConfig } from '@/types/sortTypes'

import {
  sortEventsDesc,
  getUpcomingEvents,
  getPastEvents,
} from '@/utils/sortEvents'

export const eventsSortData: ReadonlyArray<SortConfig<Event>> = [
  {
    key: 'upcoming-events',
    label: 'Upcoming Events',
    sortFn: getUpcomingEvents,
  },
  {
    key: 'past-events',
    label: 'Past Events',
    sortFn: getPastEvents,
  },
  {
    key: 'all-events',
    label: 'All Events',
    sortFn: sortEventsDesc,
  },
] as const
