import type { SortConfig } from '@filecoin-foundation/hooks/useSort/types'

import { type Event } from '../types/eventType'

import {
  sortEventsDesc,
  getUpcomingEvents,
  getPastEvents,
} from '@/events/utils/sortEvents'

export const eventsSortConfigs = [
  {
    id: 'upcoming-events',
    name: 'Upcoming Events',
    sortFn: getUpcomingEvents,
  },
  {
    id: 'all-events',
    name: 'All Events',
    sortFn: sortEventsDesc,
  },
  {
    id: 'past-events',
    name: 'Past Events',
    sortFn: getPastEvents,
  },
] as const satisfies ReadonlyArray<SortConfig<Event>>
