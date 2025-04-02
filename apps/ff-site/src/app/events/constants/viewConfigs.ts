import type { EntryViewConfig } from '@filecoin-foundation/hooks/useEntryView/types'

import { type Event } from '../types/eventType'

import {
  sortEventsDesc,
  getUpcomingEvents,
  getPastEvents,
} from '@/events/utils/sortEvents'

export const eventsViewConfigs = [
  {
    id: 'upcoming-events',
    name: 'Upcoming Events',
    filterOrSortFn: getUpcomingEvents,
  },
  {
    id: 'all-events',
    name: 'All Events',
    filterOrSortFn: sortEventsDesc,
  },
  {
    id: 'past-events',
    name: 'Past Events',
    filterOrSortFn: getPastEvents,
  },
] as const satisfies ReadonlyArray<EntryViewConfig<Event>>
