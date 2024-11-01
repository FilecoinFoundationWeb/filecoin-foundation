import { PageSection } from '@/components/PageSection'

import type { Event } from '../../types/eventType'

import { LumaEvents } from './LumaEvents'

type EventsSectionProps = NonNullable<Event['lumaEventsSection']>

export function EventsSection({ title, embedLink }: EventsSectionProps) {
  return (
    <PageSection kicker="Explore" title={title || 'Events'}>
      <LumaEvents embedLink={embedLink} />
    </PageSection>
  )
}
