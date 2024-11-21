import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { PageSection } from '@/components/PageSection'

import type { Event } from '../../types/eventType'
import { getMetaData } from '../../utils/getMetaData'
import { sortEventsAsc } from '../../utils/sortEvents'

type EventSectionProps = NonNullable<Event['eventSection']>

export function EventSection({ title, events }: EventSectionProps) {
  const sortedEvents = sortEventsAsc(events)

  return (
    <PageSection kicker="Explore" title={title || 'Events'}>
      <CardGrid cols="smTwo">
        {sortedEvents.map((event) => {
          const {
            title,
            startDate,
            endDate,
            location,
            description,
            externalLink,
          } = event

          const ctaProps = externalLink && {
            cta: {
              href: externalLink.url,
              text: externalLink.text || 'View Event Details',
              icon: MagnifyingGlass,
            },
          }

          return (
            <Card
              key={title}
              title={title}
              description={description}
              borderColor="brand-400"
              metaData={getMetaData({
                startDate,
                endDate,
                location,
              })}
              {...ctaProps}
            />
          )
        })}
      </CardGrid>
    </PageSection>
  )
}
