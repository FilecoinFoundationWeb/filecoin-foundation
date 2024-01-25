import EventsList from '@/components/EventsList'
import PageHeader from '@/components/PageHeader'

import { EventData } from '@/types/eventTypes'

import { createMetadata } from '@/utils/createMetadata'
import { getMarkdownData } from '@/utils/getMarkdownData'
import { sortEvents } from '@/utils/sortEvents'

import { attributes } from '@/content/pages/events.md'

import { PATHS } from '@/constants/paths'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.EVENTS)

export default function EventsPage() {
  const events: EventData[] = getMarkdownData(
    'src/content/events'
  ) as EventData[]
  const sortedEvents = sortEvents(events)

  return (
    <>
      <PageHeader title={title} description={description} />

      <div>
        <EventsList events={sortedEvents} />
      </div>
    </>
  )
}
