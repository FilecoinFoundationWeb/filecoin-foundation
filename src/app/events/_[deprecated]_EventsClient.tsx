'use client'

import { useEffect, useState } from 'react'

import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { SortListbox } from '@/components/SortListbox'

import { type EventData } from '@/types/eventTypes'
import { type SortOptionType } from '@/types/sortTypes'

import { sortEntriesByDate } from '@/utils/sortEntriesByDate'

import { DEFAULT_SORT_OPTION } from '@/constants/sortConstants'

type EventsClientProps = {
  events: EventData[]
}

export function EventsClient({ events }: EventsClientProps) {
  const [sortOption, setSortOption] =
    useState<SortOptionType>(DEFAULT_SORT_OPTION)
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
      <CardLayout>
        {sortedEvents.map((event) => (
          <Card key={event.slug} title={event.title} />
        ))}
      </CardLayout>
    </div>
  )
}
