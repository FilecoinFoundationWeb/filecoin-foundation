import { Badge } from '@/components/Badge'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getEventData } from '@/utils/getEventData'
import { getEventMetaData } from '@/utils/getMetaData'

import { type DynamicPathValues, PATHS } from '@/constants/paths'
import { graphicsData } from '@/data/graphicsData'

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

  const { title, description, image, involvement, externalLink } = data

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <Badge borderColor="brand-100">{involvement}</Badge>
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
          type: 'dynamic',
          ...image,
          src: image.url,
          alt: image.alt,
          fallback: graphicsData.imageFallback,
        }}
      />
    </>
  )
}
