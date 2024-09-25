import type { Event } from '@/types/eventType'
import type { CTAProps } from '@/types/sharedProps/ctaType'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { getEventData } from '@/utils/getEventData'
import { getEventMetaData } from '@/utils/getMetaData'

import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TagLabel } from '@/components/TagLabel'

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
        cta={buildCtaArray(externalLink, lumaCalendarLink)}
        image={{
          alt: '',
          ...(image || graphicsData.imageFallback),
          fallback: graphicsData.imageFallback,
        }}
      />
    </>
  )
}

function buildCtaArray(
  externalLink: Event['externalLink'],
  lumaCalendarLink?: Event['lumaCalendarLink'],
) {
  const ctaArray: Array<CTAProps> = []

  if (externalLink) {
    ctaArray.push({ href: externalLink, text: 'View More Event Details' })
  }

  if (lumaCalendarLink) {
    ctaArray.push({ href: lumaCalendarLink, text: 'Check Event Calendar' })
  }

  return ctaArray.length > 0 ? ctaArray : undefined
}
