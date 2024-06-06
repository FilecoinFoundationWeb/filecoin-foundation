import { Event, WithContext, Place, VirtualLocation } from 'schema-dts'

import { EventData } from '@/types/eventTypes'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { SCHEMA_CONTEXT_URL } from '@/constants/structuredDataConstants'

export function generateStructuredData(data: EventData): WithContext<Event> {
  const {
    title,
    slug,
    description,
    startDate,
    endDate,
    image,
    location,
    externalLink,
  } = data

  let eventLocation: Place | VirtualLocation | undefined

  if (location) {
    eventLocation = {
      '@type': 'Place',
      name: location,
    }
  } else if (externalLink) {
    eventLocation = {
      '@type': 'VirtualLocation',
      url: externalLink.href,
    }
  }

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@type': 'Event',
    name: title,
    description,
    startDate,
    endDate,
    location: eventLocation,
    image: image.url,
    url: `${BASE_URL}${PATHS.EVENTS.path}/${slug}`,
  }
}
