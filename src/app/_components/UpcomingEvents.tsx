import { EventsList } from '@/components/EventsList'

import { getEventData } from '@/utils/getEventData'

import { PATHS } from '@/constants/paths'

const events = getEventData(PATHS.EVENTS.entriesContentPath as string)
const firstTwoEvents = events.slice(0, 2)

export function UpcomingEvents() {
  return <EventsList events={firstTwoEvents} />
}
