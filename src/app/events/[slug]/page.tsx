import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

import { EventData } from '@/types/eventTypes'
import { SeoMetadata } from '@/types/metadataTypes'

import { createMetadata } from '@/utils/createMetadata'

import { PATHS, PathValues } from '@/constants/paths'

type Props = {
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

export async function generateMetadata({ params }: Props) {
  const { slug } = params
  const data = getEventsData(slug)

  const seo: SeoMetadata = {
    title: data.title,
    description: data.f_description || '',
  }

  const path: PathValues = `${PATHS.EVENTS}/${slug}`

  return createMetadata(seo, path)
}

const Event = ({ params }: Props) => {
  const { slug } = params
  const data = getEventsData(slug)

  return (
    <>
      <header>
        <h1 className="text-2xl font-bold mb-5">{data.title}</h1>
      </header>

      <p>{data.f_description}</p>
    </>
  )
}

export default Event
