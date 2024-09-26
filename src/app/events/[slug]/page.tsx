import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { getEventData } from '@/utils/getEventData'
import { getEventMetaData } from '@/utils/getMetaData'

import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TagLabel } from '@/components/TagLabel'

import { buildCtaArray } from '../utils/buildCtaArray'

import { SponsorsSection } from './components/SponsorsSection'
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
    seo: data.seo,
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
    sponsors,
  } = data

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <TagLabel borderColor="brand-100">
        {getCategoryLabel({ collectionName: 'event_entries', category })}
      </TagLabel>
      <PageHeader
        title={title}
        description={description}
        metaData={getEventMetaData(data)}
        cta={buildCtaArray({ externalLink, lumaCalendarLink })}
        image={{
          alt: '',
          ...(image || graphicsData.imageFallback),
          fallback: graphicsData.imageFallback,
        }}
      />

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

      {sponsors && Object.keys(sponsors).length > 0 && (
        <SponsorsSection sponsors={data.sponsors} />
      )}
    </>
  )
}
