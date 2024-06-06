import { Event, WithContext, Place, VirtualLocation } from 'schema-dts'

import { EventData } from '@/types/eventTypes'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { SCHEMA_CONTEXT_URL } from '@/constants/structuredDataConstants'

type LocationType = Place | VirtualLocation | undefined

function getLocation(
  location: EventData['location'],
  externalLink: EventData['externalLink'],
): LocationType {
  if (location) {
    return {
      '@type': 'Place',
      name: location,
    }
  }

  if (externalLink) {
    return {
      '@type': 'VirtualLocation',
      url: externalLink.href,
    }
  }

  return undefined
}

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

  const eventLocation: LocationType = getLocation(location, externalLink)

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@type': 'Event',
    name: title,
    description,
    startDate,
    endDate,
    ...(eventLocation && { location: eventLocation }),
    image: image.url,
    url: `${BASE_URL}${PATHS.EVENTS.path}/${slug}`,
  }
}
