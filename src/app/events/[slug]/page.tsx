import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TagGroupContainer } from '@/components/TagComponents/TagGroupContainer'
import { TagLabel } from '@/components/TagComponents/TagLabel'

import { getInvolvedData } from '../data/getInvolvedData'
import { getEventData } from '../utils/getEventData'
import { getMetaData } from '../utils/getMetaData'
import { isEventConcluded } from '../utils/isEventConcluded'
import { sortNonEmptyEventsAsc } from '../utils/sortEvents'

import { ProgramSection } from './components/ProgramSection'
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
    program,
    schedule,
    speakers,
    sponsors,
    recap,
  } = data

  const { youtubeEmbedUrl, youtubePlaylistUrl } = recap ?? {}

  const eventHasConcluded = isEventConcluded(startDate, endDate)
  const eventHasProgram = program && program.events.length > 0
  const eventHasRecap = eventHasConcluded && youtubeEmbedUrl
  const eventHasSchedule = schedule && schedule.days.length > 0
  const eventHasSpeakers = speakers && speakers.speakersList.length > 0
  const eventHasSponsors = sponsors && Object.keys(sponsors).length > 0

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <div className="grid gap-4">
        <TagGroupContainer>
          <TagLabel>
            {getCategoryLabel({ collectionName: 'event_entries', category })}
          </TagLabel>
          {eventHasConcluded && (
            <TagLabel variant="callout">Past Event</TagLabel>
          )}
        </TagGroupContainer>

        <PageHeader
          title={title}
          description={description}
          metaData={getMetaData({
            startDate,
            endDate,
            location: location.primary,
          })}
          cta={buildCtaArray({
            links: {
              externalLink,
              lumaCalendarLink,
              youtubePlaylistUrl,
            },
            eventHasConcluded,
          })}
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
            objectFit: 'cover',
          }}
        />
      </div>

      {eventHasRecap && <RecapSection youtubeEmbedUrl={youtubeEmbedUrl} />}

      {eventHasProgram && (
        <ProgramSection
          title={program.title}
          kicker={program.kicker}
          events={sortNonEmptyEventsAsc(program.events)}
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
