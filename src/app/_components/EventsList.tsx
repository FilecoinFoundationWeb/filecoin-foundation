import { EventListItem } from '@/components/EventListItem'

import { EventData } from '@/types/eventTypes'

import { sortEvents } from '@/utils/sortEvents'

type EventsListProps = {
  events: EventData[]
  className?: string
}

export function EventsList({ events, className }: EventsListProps) {
  if (events.length === 0) {
    return <p>No events found.</p>
  }

  const sortedEvents = sortEvents(events)

  return (
    <ul className={className}>
      {sortedEvents.map((event) => (
        <EventListItem key={event.slug} event={event} />
      ))}
    </ul>
  )
}
