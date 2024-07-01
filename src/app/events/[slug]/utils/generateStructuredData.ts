import { Event, WithContext, Place, VirtualLocation } from 'schema-dts'

import { EventData } from '@/types/eventTypes'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { SCHEMA_CONTEXT_URL } from '@/constants/structuredDataConstants'

type LocationType = Place | VirtualLocation | undefined

type GetLocationProps = {
  location: EventData['location']
  externalLink: EventData['externalLink']
  slug: EventData['slug']
}

function getLocation({
  location,
  externalLink,
  slug,
}: GetLocationProps): LocationType {
  if (!location) {
    return undefined
  }

  if (location === 'Virtual') {
    return {
      '@type': 'VirtualLocation',
      url: externalLink || `${BASE_URL}${PATHS.EVENTS.path}/${slug}`,
    }
  }

  return {
    '@type': 'Place',
    name: location,
  }
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

  const eventLocation: LocationType = getLocation({
    location,
    externalLink,
    slug,
  })

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@type': 'Event',
    name: title,
    description,
    startDate,
    endDate,
    ...(eventLocation && { location: eventLocation }),
    image: image.src,
    url: `${BASE_URL}${PATHS.EVENTS.path}/${slug}`,
  }
}
