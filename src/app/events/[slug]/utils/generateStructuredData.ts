import { Event, WithContext } from 'schema-dts'

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

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@type': 'Event',
    name: title,
    description,
    startDate,
    endDate,
    location: [
      {
        '@type': 'VirtualLocation',
        url: externalLink?.href,
      },
      {
        '@type': 'Place',
        name: location,
      },
    ],
    image: image.url,
    url: `${BASE_URL}${PATHS.EVENTS.path}/${slug}`,
  }
}
