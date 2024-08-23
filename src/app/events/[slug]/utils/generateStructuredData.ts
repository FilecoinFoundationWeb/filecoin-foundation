import {
  Event as EventSchema,
  Place,
  VirtualLocation,
  WithContext,
} from 'schema-dts'

import type { Event } from '@/types/eventType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import {
  SCHEMA_CONTEXT_URL,
  SCHEMA_EVENT_ATTENDANCE_MODE_OFFLINE_URL,
  SCHEMA_EVENT_ATTENDANCE_MODE_ONLINE_URL,
} from '@/constants/structuredDataConstants'

type LocationType = Place | VirtualLocation | undefined

type GetLocationProps = {
  location: Event['location']
  externalLink: Event['externalLink']
  slug: Event['slug']
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

export function generateStructuredData(data: Event): WithContext<EventSchema> {
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

  const eventAttendanceMode =
    location === 'Virtual'
      ? SCHEMA_EVENT_ATTENDANCE_MODE_ONLINE_URL
      : SCHEMA_EVENT_ATTENDANCE_MODE_OFFLINE_URL

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@type': 'Event',
    eventAttendanceMode,
    name: title,
    description,
    startDate: startDate.toISOString(),
    endDate: (endDate || startDate)?.toISOString(),
    ...(eventLocation && { location: eventLocation }),
    image: image?.src,
    url: `${BASE_URL}${PATHS.EVENTS.path}/${slug}`,
  }
}
