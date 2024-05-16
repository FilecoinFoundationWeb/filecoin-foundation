'use client'

import { useEffect, useState } from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { SortListbox } from '@/components/SortListbox'

import { type EventData } from '@/types/eventTypes'
import { type SortOptionItems } from '@/types/sortTypes'

import { formatDate } from '@/utils/formatDate'
import { sortEntriesByDate } from '@/utils/sortEntriesByDate'

import { PATHS } from '@/constants/paths'
import { DEFAULT_SORT_OPTION } from '@/constants/sortConstants'

type EventsClientProps = {
  events: EventData[]
}

function prepareMetaData(
  startDate: EventData['startDate'],
  endDate: EventData['endDate'],
) {
  const formattedStartDate = startDate && formatDate(startDate)
  const formattedEndDate = endDate && formatDate(endDate)

  if (formattedStartDate && formattedEndDate) {
    return [`${formattedStartDate} – ${formattedEndDate}`]
  }

  return [formattedStartDate]
}

export function EventsClient({ events }: EventsClientProps) {
  const [sortOption, setSortOption] =
    useState<SortOptionItems>(DEFAULT_SORT_OPTION)
  const [sortedEvents, setSortedEvents] = useState<EventData[]>([])

  useEffect(() => {
    if (events.length > 0) {
      const sorted = sortEntriesByDate({
        entries: events,
        sortOption,
        dateField: 'startDate',
      })
      setSortedEvents(sorted)
    }
  }, [sortOption, events])

  if (events.length === 0) {
    return <p>No events found.</p>
  }

  return (
    <div className="flex flex-col items-end gap-6">
      <SortListbox sortOption={sortOption} onSortOptionChange={setSortOption} />
      <CardLayout type="home">
        {sortedEvents.map((event) => {
          const { slug, title, image, involvement, startDate, endDate } = event

          const metaData = prepareMetaData(startDate, endDate)

          return (
            <Card
              key={slug}
              title={title}
              tag={involvement}
              metaData={metaData}
              image={image}
              borderColor="brand-400"
              textIsClamped={true}
              cta={{
                href: `${PATHS.EVENTS}/${slug}`,
                text: 'View Event Details',
                icon: MagnifyingGlass,
              }}
            />
          )
        })}
      </CardLayout>
    </div>
  )
}
