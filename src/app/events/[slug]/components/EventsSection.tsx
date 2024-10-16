import type { Event } from '@/types/eventType'

import { PageSection } from '@/components/PageSection'

type EventsSectionProps = Pick<
  NonNullable<Event['lumaEventsSection']>,
  'title' | 'embedLink'
>

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
