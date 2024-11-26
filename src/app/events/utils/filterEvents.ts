import type { CategoryId } from '@/types/categoryTypes'

import type { Event } from '../types/eventType'

export function filterEventByCategory(event: Event, categoryId?: CategoryId) {
  return event.category === categoryId
}

export function filterEventByLocation(event: Event, locationId?: CategoryId) {
  return event.location.region === locationId
}
