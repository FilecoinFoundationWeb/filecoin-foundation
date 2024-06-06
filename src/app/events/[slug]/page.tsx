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

export async function generateMetadata({ params }: EventProps) {
  const { slug } = params
  const data = getEventData(slug)

  return createMetadata({
    seo: data.seo,
    title: data.title,
    description: data.description,
    path: `${PATHS.EVENTS.path}/${data.slug}` as DynamicPathValues,
  })
}

export default function EventEntry({ params }: EventProps) {
  const { slug } = params
  const data = getEventData(slug)

  const { title, description, image, involvement, externalLink } = data

  const ctaProps =
    externalLink && externalLink.href
      ? {
          cta: {
            href: externalLink.href,
            text: 'Go to website',
          },
        }
      : {}

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <Badge borderColor="brand-100">{involvement}</Badge>
      <PageHeader
        title={title}
        metaData={getEventMetaData(data)}
        image={{
          type: 'dynamic',
          ...image,
          src: image.url,
          alt: image.alt,
          fallback: graphicsData.imageFallback,
        }}
        {...ctaProps}
      />{' '}
      {description && <p>{description}</p>}
    </>
  )
}
