import { PageSection } from '@/components/PageSection'

import type { Event } from '../../types/eventType'

type EventsSectionProps = NonNullable<Event['lumaEventsSection']>

export function EventsSection({ title, embedLink }: EventsSectionProps) {
  return (
    <PageSection kicker="Explore" title={title || 'Events'}>
      <iframe
        src={embedLink}
        width="100%"
        height="720"
        className="rounded-lg"
      ></iframe>
    </PageSection>
  )
}
