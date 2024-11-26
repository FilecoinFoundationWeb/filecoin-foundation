import type { CategoryId } from '@/types/categoryTypes'

import type { Event } from '../types/eventType'

export function filterEventsByCategory(
  events: Array<Event>,
  categoryId?: CategoryId,
) {
  return events.filter((event) => event.category === categoryId)
}

export function filterEventsByLocation(
  events: Array<Event>,
  locationId?: CategoryId,
) {
  return events.filter((event) => event.location.region === locationId)
}
