import type { Event } from '@/types/eventType'

import { PATHS } from '@/constants/paths'

import { Button } from '@/components/Button'
import { PageSection } from '@/components/PageSection'
import { YouTubeVideoEmbed } from '@/components/YouTubeVideoEmbed'

type RecapSectionProps = {
  youtubeEmbedUrl: NonNullable<Event['recapYoutubeEmbedUrl']>
}

export function RecapSection({ youtubeEmbedUrl }: RecapSectionProps) {
  return (
    <PageSection
      kicker="Event Recap"
      title="Thank You for Joining Us"
      description="This event has concluded, and we hope you had a fantastic experience! Stay tuned for our upcoming events and see what exciting things are on the horizon."
    >
      <YouTubeVideoEmbed videoUrl={youtubeEmbedUrl} />
      <Button className="sm:self-center" href={PATHS.EVENTS.path}>
        View Upcoming Events
      </Button>
    </PageSection>
  )
}
