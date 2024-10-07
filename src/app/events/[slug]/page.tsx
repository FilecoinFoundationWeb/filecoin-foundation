import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { getEventData } from '@/utils/getEventData'
import { getEventMetaData } from '@/utils/getMetaData'

import { CardGrid } from '@/components/CardGrid'
import { KeyMemberCard } from '@/components/KeyMemberCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TagLabel } from '@/components/TagLabel'

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

  const {
    title,
    description,
    image,
    category,
    externalLink,
    lumaCalendarLink,
    lumaEventsSection,
    speakers,
    sponsors,
  } = data

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
            ...image,
            alt: '',
          }}
        />
      </div>

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

      {speakers && (
        <PageSection kicker="speakers" title="FIL Bangkok 2024 Speakers">
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
      )}

      {sponsors && Object.keys(sponsors).length > 0 && (
        <SponsorSection sponsors={sponsors} />
      )}
    </PageLayout>
  )
}
