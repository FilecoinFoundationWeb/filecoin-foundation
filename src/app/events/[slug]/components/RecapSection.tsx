import { PATHS } from '@/constants/paths'

import { Button } from '@/components/Button'
import { PageSection } from '@/components/PageSection'
import { YouTubeVideoEmbed } from '@/components/YouTubeVideoEmbed'

export function RecapSection() {
  return (
    <PageSection kicker="Event Recap" title="Thank You for Joining Us">
      <YouTubeVideoEmbed videoUrl="https://www.youtube.com/embed/m-lWAQqLI6A" />
      <Button className="sm:self-center" href={PATHS.EVENTS.path}>
        View Upcoming Events
      </Button>
    </PageSection>
  )
}
