import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { TagGroup, TagLabel } from '@filecoin-foundation/ui/TagComponents'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getCategoryLabel } from '@/utils/getCategoryLabel'

import { CTAButtonGroup } from '@/components/CTAButtonGroup'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'

import { getInvolvedData } from '../data/getInvolvedData'
import { getEventData, getEventsData } from '../utils/getEventData'
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
  params: Promise<SlugParams>
}

export default async function EventEntry(props: EventProps) {
  const { slug } = await props.params
  const data = await getEventData(slug)
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

  const categoryLabel = getCategoryLabel({
    collectionName: 'event_entries',
    category,
  })

  const { youtubeEmbedUrl, youtubePlaylistUrl } = recap ?? {}

  const eventHasConcluded = isEventConcluded(startDate, endDate)
  const eventHasProgram = program && program.events.length > 0
  const eventHasRecap = eventHasConcluded && youtubeEmbedUrl
  const eventHasSchedule = schedule && schedule.days.length > 0
  const eventHasSpeakers = speakers && speakers.speakersList.length > 0
  const eventHasSponsors = sponsors && Object.keys(sponsors).length > 0

  const ctaArray = buildCtaArray({
    links: {
      externalLink,
      lumaCalendarLink,
      youtubePlaylistUrl,
    },
    eventHasConcluded,
  })

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <div className="grid gap-4">
        {eventHasConcluded ? (
          <TagGroup
            tags={[
              { text: categoryLabel },
              { text: 'Past Event', variant: 'callout' },
            ]}
          />
        ) : (
          <TagLabel>{categoryLabel}</TagLabel>
        )}

        <PageHeader
          title={title}
          description={{ text: description }}
          metaData={getMetaData({
            startDate,
            endDate,
            location: location.primary,
          })}
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
            objectFit: 'cover',
          }}
        >
          <CTAButtonGroup cta={ctaArray ?? []} />
        </PageHeader>
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

export async function generateStaticParams() {
  const entries = await getEventsData()
  return entries.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(props: EventProps) {
  const { slug } = await props.params
  const data = await getEventData(slug)

  return createMetadata({
    title: data.seo.title,
    description: data.seo.description,
    image: graphicsData.events1.data.src,
    path: `${PATHS.EVENTS.path}/${data.slug}`,
  })
}
