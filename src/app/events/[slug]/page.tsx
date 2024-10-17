import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { getEventMetaData } from '@/utils/getMetaData'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TagGroup } from '@/components/TagGroup'

import { getInvolvedData } from '../data/getInvolvedData'
import { getEventData } from '../utils/getEventData'
import { isEventConcluded } from '../utils/isEventConcluded'

import { EventsSection } from './components/EventsSection'
import { RecapSection } from './components/RecapSection'
import { ScheduleSection } from './components/ScheduleSection'
import { SpeakersSection } from './components/SpeakersSection'
import { SponsorSection } from './components/SponsorSection'
import { buildCtaArray } from './utils/buildCtaArray'
import { generateStructuredData } from './utils/generateStructuredData'

type EventProps = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: EventProps) {
  const { slug } = params
  const data = getEventData(slug)

  return createMetadata({
    seo: { ...data.seo, image: graphicsData.events1.data.src },
    path: `${PATHS.EVENTS.path}/${data.slug}` as DynamicPathValues,
  })
}

export default function EventEntry({ params }: EventProps) {
  const { slug } = params
  const data = getEventData(slug)
  const sponsorEventData = getInvolvedData[0]

  const {
    title,
    description,
    image,
    category,
    externalLink,
    lumaCalendarLink,
    startDate,
    endDate,
    lumaEventsSection,
    schedule,
    speakers,
    sponsors,
    recapYoutubeEmbedUrl,
    recapYoutubePlaylistUrl,
  } = data

  const eventHasConcluded = isEventConcluded(startDate, endDate)
  const eventHasEventsSection = lumaEventsSection && lumaEventsSection.embedLink
  const eventHasRecap = eventHasConcluded && recapYoutubeEmbedUrl
  const eventHasSchedule = schedule && schedule.days.length > 0
  const eventHasSpeakers = speakers && speakers.length > 0
  const eventHasSponsors = sponsors && Object.keys(sponsors).length > 0

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <div className="grid gap-4">
        <TagGroup
          label={[
            getCategoryLabel({ collectionName: 'event_entries', category }),
            eventHasConcluded ? 'Concluded Event' : undefined,
          ]}
        />
        <PageHeader
          title={title}
          description={description}
          metaData={getEventMetaData(data)}
          cta={buildCtaArray({
            links: { externalLink, lumaCalendarLink, recapYoutubePlaylistUrl },
            eventHasConcluded,
          })}
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
          }}
        />
      </div>

      {eventHasRecap && <RecapSection youtubeEmbedUrl={recapYoutubeEmbedUrl} />}

      {eventHasEventsSection && (
        <EventsSection
          title={lumaEventsSection.title}
          embedLink={lumaEventsSection.embedLink}
        />
      )}

      {eventHasSpeakers && <SpeakersSection speakers={speakers} />}
      {eventHasSchedule && <ScheduleSection schedule={schedule} />}
      {eventHasSponsors && <SponsorSection sponsors={sponsors} />}

      <CTASection
        title={sponsorEventData.title}
        description={sponsorEventData.description}
        cta={{
          href: sponsorEventData.cta.href,
          text: sponsorEventData.cta.text,
        }}
      />
    </PageLayout>
  )
}
