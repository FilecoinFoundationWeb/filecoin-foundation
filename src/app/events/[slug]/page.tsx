import Image from 'next/image'

import { Event, WithContext } from 'schema-dts'

import { Heading } from '@/components/Heading'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { EventData } from '@/types/eventTypes'

import { generateDynamicContentMetadata } from '@/utils/generateDynamicContentMetadata'
import { getEventData } from '@/utils/getEventData'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

type EventProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: EventProps) {
  const { slug } = params
  const data = getEventData(slug)

  return generateDynamicContentMetadata({
    basePath: PATHS.EVENTS.path,
    data,
  })
}

function createEventPostStructuredData(data: EventData): WithContext<Event> {
  const { title, slug, description, startDate, endDate, image } = data

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: title,
    description,
    startDate,
    endDate,
    image: image?.url,
    url: `${BASE_URL}${PATHS.EVENTS.path}/${slug}`,
  }
}

export default function Event({ params }: EventProps) {
  const { slug } = params
  const data = getEventData(slug)

  console.log({ slug, data })
  const { title, description, image } = data

  return (
    <>
      <StructuredDataScript
        structuredData={createEventPostStructuredData(data)}
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
