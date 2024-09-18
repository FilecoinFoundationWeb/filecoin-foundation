import type { SeoMetadata } from '@/types/metadataTypes'

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
    seo: data.seo as SeoMetadata,
    path: `${PATHS.EVENTS.path}/${data.slug}` as DynamicPathValues,
  })
}

export default function EventEntry({ params }: EventProps) {
  const { slug } = params
  const data = getEventData(slug)

  const { title, description, image, category, externalLink } = data

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
        cta={
          externalLink
            ? { href: externalLink, text: 'View More Event Details' }
            : undefined
        }
        image={{
          alt: '',
          ...(image || graphicsData.imageFallback),
          fallback: graphicsData.imageFallback,
        }}
      />
    </>
  )
}
