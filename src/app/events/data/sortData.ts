import {
  sortEventsDesc,
  getUpcomingEvents,
  getPastEvents,
} from '@/utils/sortEvents'

export const eventsSortData = [
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
