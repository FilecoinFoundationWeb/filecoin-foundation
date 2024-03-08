import { EventsList } from '@/components/EventsList'

import { getEventsData } from '@/utils/getEventData'

const events = getEventsData()
const firstTwoEvents = events.slice(0, 2)

export function UpcomingEvents() {
  return <EventsList events={firstTwoEvents} />
}
