import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'

import { Card } from '@/components/Card'
import { PageSection } from '@/components/PageSection'

import { DEFAULT_CTA_TEXT } from '../../constants/constants'
import type { Event } from '../../types/eventType'
import { getMetaData } from '../../utils/getMetaData'

type ProgramSectionProps = NonNullable<Event['program']>

export function ProgramSection({ title, kicker, events }: ProgramSectionProps) {
  return (
    <PageSection kicker={kicker} title={title}>
      <CardGrid as="section" cols="smTwo">
        {events.map((event) => {
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
              icon: {
                component: MagnifyingGlassIcon,
              },
            },
          }

          return (
            <Card
              key={title}
              as="article"
              description={description ? { text: description } : undefined}
              borderColor="light"
              metaData={getMetaData({
                startDate,
                endDate,
                location,
              })}
              title={{
                text: title,
              }}
              {...ctaProps}
            />
          )
        })}
      </CardGrid>
    </PageSection>
  )
}
