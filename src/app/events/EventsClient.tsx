'use client'

import { useEffect, useState } from 'react'

import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { SortType, SortListbox } from '@/components/SortListbox'

import { EventData } from '@/types/eventTypes'

import { sortEntriesByDate } from '@/utils/sortEntriesByDate'

type EventsClientProps = {
  events: EventData[]
}

export function EventsClient({ events }: EventsClientProps) {
  const [sortType, setSortType] = useState<SortType>(SortType.Newest)
  const [sortedEvents, setSortedEvents] = useState<EventData[]>([])

  useEffect(() => {
    if (events.length > 0) {
      const sorted = sortEntriesByDate(events, sortType)
      setSortedEvents(sorted)
    }
  }, [sortType, events])

  function handleSortTypeChange(selectedOption: SortType) {
    setSortType(selectedOption)
  }

  if (events.length === 0) {
    return <p>No events found.</p>
  }

  return (
    <div className="flex flex-col items-end gap-6">
      <SortListbox onSortTypeChange={handleSortTypeChange} />
      <CardLayout>
        {sortedEvents.map((event) => (
          <Card key={event.slug} title={event.title} />
        ))}
      </CardLayout>
    </div>
  )
}
