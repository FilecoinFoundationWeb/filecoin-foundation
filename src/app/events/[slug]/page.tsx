import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { getEventMetaData } from '@/utils/getMetaData'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TagLabel } from '@/components/TagLabel'

import { getInvolvedData } from '../data/getInvolvedData'
import { getEventData } from '../utils/getEventData'
import { isEventConcluded } from '../utils/isEventConcluded'

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
  } = data

  const eventHasSchedule = schedule && schedule.days.length > 0
  const eventHasSpeakers = speakers && speakers.length > 0
  const eventHasSponsors = sponsors && Object.keys(sponsors).length > 0
  const eventHasRecap = isEventConcluded(startDate, endDate)

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <div className="grid gap-4">
        <TagLabel borderColor="brand-100">
          {getCategoryLabel({ collectionName: 'event_entries', category })}
        </TagLabel>
        <PageHeader
          title={title}
          description={description}
          metaData={getEventMetaData(data)}
          cta={buildCtaArray({ externalLink, lumaCalendarLink })}
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
          }}
        />
      </div>
      {eventHasRecap && <RecapSection />}
      {lumaEventsSection && (
        <PageSection kicker="Explore" title={lumaEventsSection.title}>
          <iframe
            src={lumaEventsSection.embedLink}
            width="100%"
            height="720"
            className="rounded-lg"
          ></iframe>
        </PageSection>
      )}
      {eventHasSchedule && <ScheduleSection schedule={schedule} />}
      {eventHasSpeakers && <SpeakersSection speakers={speakers} />}
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
