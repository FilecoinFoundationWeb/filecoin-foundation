import type { Event } from '@/events/types/eventType'

export function eventMatchesCategoryQuery(event: Event, query?: string) {
  return event.category === query
}
