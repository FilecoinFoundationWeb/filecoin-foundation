import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { PageSection } from '@/components/PageSection'

import { DEFAULT_CTA_TEXT } from '../../constants/constants'
import type { Event } from '../../types/eventType'
import { getMetaData } from '../../utils/getMetaData'
import { sortEventsAsc } from '../../utils/sortEvents'

type ProgramSectionProps = NonNullable<Event['program']>

export function ProgramSection({ title, events }: ProgramSectionProps) {
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
              href: externalLink,
              text: DEFAULT_CTA_TEXT,
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
