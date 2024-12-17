'use client'

import { useState } from 'react'

import useSWR from 'swr'
import { z } from 'zod'

import { API_URLS } from '@/constants/apiUrls'

import { CardGrid } from '@/components/CardGrid'

import { CalendarCard } from './CalendarCard'
import { Placeholder } from './Placeholder'

const eventSchema = z.object({
  id: z.string(),
  start: z.object({ dateTime: z.string() }),
  end: z.object({ dateTime: z.string() }),
  htmlLink: z.string(),
  summary: z.string(),
})

export type EventType = z.infer<typeof eventSchema>

const eventsSchema = z.object({
  items: z.array(eventSchema),
})

async function getEvents(endpoint: string) {
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error('getEvents: Failed to fetch events')
  }

  const data = await response.json()
  return eventsSchema.parse(data)
}

export function CalendarCards() {
  const [currentDate] = useState(new Date())
  const timeMin = encodeURIComponent(currentDate.toISOString())

  const url = `${API_URLS.googleCalendar}${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?maxResults=6&singleEvents=true&timeMin=${timeMin}&key=${process.env.NEXT_PUBLIC_CALENDAR_API_KEY}`

  const { data: events, error } = useSWR(url, getEvents)

  if (error) {
    return <Placeholder text="Failed to load events" />
  }

  if (!events) {
    return <Placeholder text="Loading events..." />
  }

  if (events.items.length === 0) {
    return <Placeholder text="No upcoming events" />
  }

  return (
    <CardGrid cols="lgTwo">
      {events.items.map(({ id, start, end, htmlLink, summary }) => (
        <CalendarCard
          key={id}
          start={start}
          end={end}
          htmlLink={htmlLink}
          summary={summary}
        />
      ))}
    </CardGrid>
  )
}
