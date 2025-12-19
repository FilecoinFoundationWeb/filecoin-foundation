import type { EntryViewConfig } from '@filecoin-foundation/hooks/useEntryView/types'

import { type Event } from '../types/eventType'

import {
  getPastEvents,
  getUpcomingEvents,
  sortEventsDesc,
} from '@/events/utils/sortEvents'

const upcomingEventsConfig = {
  id: 'upcoming-events',
  name: 'Upcoming Events',
  filterOrSortFn: getUpcomingEvents,
}

const allEventsConfig = {
  id: 'all-events',
  name: 'All Events',
  filterOrSortFn: sortEventsDesc,
}

const pastEventsConfig = {
  id: 'past-events',
  name: 'Past Events',
  filterOrSortFn: getPastEvents,
}

export const eventsViewConfigs = [
  upcomingEventsConfig,
  allEventsConfig,
  pastEventsConfig,
] as const satisfies ReadonlyArray<EntryViewConfig<Event>>

export function getDefaultViewConfig(events: Array<Event>) {
  const upcomingEvents = getUpcomingEvents(events)
  return upcomingEvents.length === 0 ? allEventsConfig : upcomingEventsConfig
}
