import Image from 'next/image'

import { Heading } from '@/components/Heading'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getEventData } from '@/utils/getEventData'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { generateEventPostStructuredData } from './structuredData'

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

  const { title, description, image } = data

  return (
    <>
      <StructuredDataScript
        structuredData={generateEventPostStructuredData(data)}
      />
      <header>
        {image && (
          <Image
            priority
            src={image.url}
            alt={image.alt}
            width={770}
            height={440}
            className="block h-auto object-contain"
          />
        )}

        <Heading tag="h1" variant="2xl">
          {title}
        </Heading>
      </header>

      {description && <p>{description}</p>}
    </>
  )
}
