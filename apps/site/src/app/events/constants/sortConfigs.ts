import {
  sortEventsDesc,
  getUpcomingEvents,
  getPastEvents,
} from '@/events/utils/sortEvents'

export const eventsSortConfigs = [
  {
    key: 'upcoming-events',
    label: 'Upcoming Events',
    sortFn: getUpcomingEvents,
  },
  {
    key: 'all-events',
    label: 'All Events',
    sortFn: sortEventsDesc,
  },
  {
    key: 'past-events',
    label: 'Past Events',
    sortFn: getPastEvents,
  },
] as const
