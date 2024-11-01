import { z } from 'zod'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { PageSection } from '@/components/PageSection'

import type { Event } from '../../types/eventType'
import { getMetaData } from '../../utils/getMetaData'
import { getLumaEvents } from '../services/lumaService'
import { mapLumaEventToMetadata } from '../utils/mapLumaEventToMetadata'

type EventsSectionProps = NonNullable<Event['lumaEventsSection']>

export async function EventsSection({ title, embedLink }: EventsSectionProps) {
  const events = await getLumaEvents()

  return (
    <PageSection kicker="Explore" title={title || 'Events'}>
      {events.length > 0 ? (
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
      ) : embedLink ? (
        <iframe
          src={embedLink}
          width="100%"
          height="720"
          className="rounded-lg"
        />
      ) : (
        <p>No events are currently available. Please check back later.</p>
      )}
    </PageSection>
  )
}
