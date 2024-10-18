import type { SortConfig } from '@/types/sortTypes'

import {
  sortEventsDesc,
  getUpcomingEvents,
  getPastEvents,
} from '@/utils/sortEvents'

import type { Event } from '@/events/types/eventType'

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
