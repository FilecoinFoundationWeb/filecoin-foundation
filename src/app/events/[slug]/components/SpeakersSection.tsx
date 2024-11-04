import { CardGrid } from '@/components/CardGrid'
import { KeyMemberCard } from '@/components/KeyMemberCard'
import { PageSection } from '@/components/PageSection'

import type { Event } from '../../types/eventType'

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
            name={speaker.name}
            title={speaker.title}
            company={speaker.company}
            linkedin={speaker.linkedin}
            image={speaker.image.src}
          />
        ))}
      </CardGrid>
    </PageSection>
  )
}
