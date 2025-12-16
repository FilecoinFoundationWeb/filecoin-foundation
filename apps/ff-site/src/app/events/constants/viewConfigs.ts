import type { EntryViewConfig } from '@filecoin-foundation/hooks/useEntryView/types'

import { type Event } from '../types/eventType'

import {
  getPastEvents,
  getUpcomingEvents,
  sortEventsDesc,
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

export function getDefaultViewConfig(events: Array<Event>) {
  const upcomingEvents = getUpcomingEvents(events)
  return upcomingEvents.length === 0
    ? eventsViewConfigs.find((config) => config.id === 'all-events')!
    : eventsViewConfigs[0]
}

export function getDefaultViewOption(events: Array<Event>) {
  const config = getDefaultViewConfig(events)
  return { id: config.id, name: config.name }
}
