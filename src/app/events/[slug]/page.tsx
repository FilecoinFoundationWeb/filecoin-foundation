import fs from 'fs'
import path from 'path'

import Image from 'next/image'

import matter from 'gray-matter'
import { Event, WithContext } from 'schema-dts'

import { StructuredDataScript } from '@/components/StructuredDataScript'

import { EventData } from '@/types/eventTypes'

import { generateDynamicContentMetadata } from '@/utils/generateDynamicContentMetadata'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

type EventProps = {
  params: {
    slug: string
  }
}

function getEventsData(slug: string): EventData {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'events',
    `${slug}.md`
  )

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found for slug: ${slug}`)
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)

  return data as EventData
}

export async function generateMetadata({ params }: EventProps) {
  const { slug } = params
  const data = getEventsData(slug)

  return generateDynamicContentMetadata({
    basePath: PATHS.EVENTS.path,
    slug,
    data,
  })
}

function createEventPostStructuredData(data: EventData): WithContext<Event> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: data.title,
    description: data.f_description,
    startDate: data['f_start-date'],
    endDate: data['f_end-date'],
    image: data.f_image ? [data.f_image.url] : undefined,
    url: `${BASE_URL}${PATHS.EVENTS.path}/${data.slug}`,
  }
}

export default function Event({ params }: EventProps) {
  const { slug } = params
  const data = getEventsData(slug)

  return (
    <>
      <StructuredDataScript
        structuredData={createEventPostStructuredData(data)}
      />

      <header>
        <Image
          src={data.f_image?.url || ''}
          alt={data.f_image?.alt || ''}
          width={770}
          height={440}
          priority
          className="block h-auto object-contain"
        />
        <h1 className="text-2xl font-bold mb-5">{data.title}</h1>
      </header>

      <p>{data.f_description}</p>
    </>
  )
}
