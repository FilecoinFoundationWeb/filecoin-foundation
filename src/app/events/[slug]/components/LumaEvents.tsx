import * as Sentry from '@sentry/nextjs'
import { ZodError } from 'zod'

import { logZodError } from '@/utils/zodUtils'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

import type { Event } from '../../types/eventType'
import { getMetaData } from '../../utils/getMetaData'
import { fetchAndParseLumaEvents } from '../services/lumaService'
import { mapLumaEventToMetadata } from '../utils/mapLumaEventToMetadata'

type EventsSectionProps = NonNullable<Event['lumaEventsSection']>

export async function LumaEvents({ embedLink }: EventsSectionProps) {
  try {
    const events = await fetchAndParseLumaEvents()

    if (events.length === 0) {
      return <p>There are currently no upcoming events.</p>
    }

    return (
      <CardGrid cols="smTwo">
        {events.map(({ event }) => (
          <Card
            key={event.api_id}
            title={event.name}
            description={event.description}
            metaData={getMetaData(mapLumaEventToMetadata(event))}
            textIsClamped={true}
            cta={{
              text: 'View Event Details',
              href: event.url,
            }}
          />
        ))}
      </CardGrid>
    )
  } catch (error) {
    Sentry.captureException(error)

    if (error instanceof ZodError) {
      logZodError(error, { location: 'Luma Events' })
    }

    if (embedLink) {
      return (
        <iframe
          src={embedLink}
          width="100%"
          height="720"
          className="rounded-lg"
        />
      )
    }

    return <p>No events are currently available. Please check back later.</p>
  }
}
