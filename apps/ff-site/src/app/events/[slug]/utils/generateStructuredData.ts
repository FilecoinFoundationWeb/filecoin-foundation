import type {
  Event as EventSchema,
  Place,
  VirtualLocation,
  WithContext,
} from 'schema-dts'

import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import {
  SCHEMA_EVENT_ATTENDANCE_MODE_OFFLINE_URL,
  SCHEMA_EVENT_ATTENDANCE_MODE_ONLINE_URL,
} from '@/constants/structuredDataConstants'

import type { Event } from '../../types/eventType'

type LocationType = Place | VirtualLocation

type GetLocationProps = {
  location: Event['location']
  externalLink: Event['externalLink']
  slug: Event['slug']
}

export function generateStructuredData(data: Event): WithContext<EventSchema> {
  const {
    slug,
    description,
    startDate,
    endDate,
    image,
    location,
    externalLink,
    seo,
  } = data

  const eventLocation: LocationType = getLocation({
    location,
    externalLink,
    slug,
  })

  const eventAttendanceMode =
    location.primary === 'Virtual'
      ? SCHEMA_EVENT_ATTENDANCE_MODE_ONLINE_URL
      : SCHEMA_EVENT_ATTENDANCE_MODE_OFFLINE_URL

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@type': 'Event',
    eventAttendanceMode,
    name: seo.title,
    description: description || seo.description,
    startDate: startDate,
    endDate: endDate || startDate,
    location: eventLocation,
    image: image?.src,
    url: `${BASE_URL}${PATHS.EVENTS.path}/${slug}`,
  }
}

function getLocation({
  location,
  externalLink,
  slug,
}: GetLocationProps): LocationType {
  if (location.primary === 'Virtual') {
    return {
      '@type': 'VirtualLocation',
      url: externalLink || `${BASE_URL}${PATHS.EVENTS.path}/${slug}`,
    }
  }

  const locationComponents = location.primary.split(', ')

  if (locationComponents.length === 2) {
    const [city, country] = locationComponents
    return {
      '@type': 'Place',
      name: location.primary,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city,
        addressCountry: country,
        addressRegion: location.region || undefined,
      },
    }
  }

  return {
    '@type': 'Place',
    name: location.primary,
  }
}
