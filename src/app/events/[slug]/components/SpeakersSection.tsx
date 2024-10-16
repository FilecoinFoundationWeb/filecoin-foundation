import { CardGrid } from '@/components/CardGrid'
import { KeyMemberCard } from '@/components/KeyMemberCard'
import { PageSection } from '@/components/PageSection'

import type { Event } from '@/events/types/eventType'

type SpeakersSectionProps = {
  speakers: NonNullable<Event['speakers']>
}

export function SpeakersSection({ speakers }: SpeakersSectionProps) {
  return (
    <PageSection kicker="speakers" title="Speakers">
      <CardGrid cols="mdTwo">
        {speakers.map((speaker) => (
          <KeyMemberCard
            key={speaker.name}
            {...speaker}
            image={{
              ...speaker.image,
              alt: `Photo of ${speaker.name}`,
            }}
          />
        ))}
      </CardGrid>
    </PageSection>
  )
}
