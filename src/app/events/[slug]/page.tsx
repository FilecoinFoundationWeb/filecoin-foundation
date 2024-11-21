import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TagGroup } from '@/components/TagGroup'

import { getInvolvedData } from '../data/getInvolvedData'
import { getEventData } from '../utils/getEventData'
import { getMetaData } from '../utils/getMetaData'
import { isEventConcluded } from '../utils/isEventConcluded'

import { EventSection } from './components/EventSection'
import { RecapSection } from './components/RecapSection'
import { ScheduleSection } from './components/ScheduleSection/ScheduleSection'
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
    seo: {
      ...data.seo,
      image: graphicsData.events1.data.src,
    },
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
    location,
    eventSection,
    schedule,
    speakers,
    sponsors,
    recapYoutubeEmbedUrl,
    recapYoutubePlaylistUrl,
  } = data

  const eventHasConcluded = isEventConcluded(startDate, endDate)
  const eventHasEventSection = eventSection && eventSection.events.length > 0
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
          metaData={getMetaData({
            startDate,
            endDate,
            location: location.primary,
          })}
          cta={buildCtaArray({
            links: { externalLink, lumaCalendarLink, recapYoutubePlaylistUrl },
            eventHasConcluded,
          })}
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
            objectFit: 'cover',
          }}
        />
      </div>

      {eventHasRecap && <RecapSection youtubeEmbedUrl={recapYoutubeEmbedUrl} />}

      {eventHasEventSection && (
        <EventSection title={eventSection.title} events={eventSection.events} />
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
