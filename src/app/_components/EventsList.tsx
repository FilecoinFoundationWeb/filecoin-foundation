import { EventListItem } from '@/components/EventListItem'

import { EventData } from '@/types/eventTypes'

type EventsListProps = {
  events: EventData[]
  className?: string
}

export function EventsList({ events, className }: EventsListProps) {
  if (events.length === 0) {
    return <p>No events available.</p>
  }

  return (
    <ul className={className}>
      {events.map((event) => (
        <EventListItem key={event.slug} event={event} />
      ))}
    </ul>
  )
}
