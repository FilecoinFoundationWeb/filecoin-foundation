import { CardGrid } from '@/components/CardGrid'
import { KeyMemberCard } from '@/components/KeyMemberCard'
import { PageSection } from '@/components/PageSection'

import type { Event } from '../../types/eventType'

type SpeakersSectionProps = {
  speakers: NonNullable<Event['speakers']>
}

export function SpeakersSection({ speakers }: SpeakersSectionProps) {
  const { title, kicker, description, speakersList } = speakers

  return (
    <PageSection kicker={kicker} title={title} description={description}>
      <CardGrid cols="mdTwo">
        {speakersList.map(({ name, title, company, linkedin, image }) => (
          <KeyMemberCard
            key={name}
            name={name}
            title={title}
            company={company}
            linkedin={linkedin}
            image={image.src}
          />
        ))}
      </CardGrid>
    </PageSection>
  )
}
