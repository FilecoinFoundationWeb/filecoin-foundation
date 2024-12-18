'use client'

import { useState } from 'react'

import useSWR from 'swr'

import { API_URLS } from '@/constants/apiUrls'

import { CardGrid } from '@/components/CardGrid'

import { getCalendarEvents } from '../../utils/getCalendarEvents'

import { CalendarCard } from './CalendarCard'
import { Placeholder } from './Placeholder'

export function CalendarCards() {
  const [currentDate] = useState(new Date())
  const timeMin = encodeURIComponent(currentDate.toISOString())

  const url = `${API_URLS.googleCalendar}${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?maxResults=6&singleEvents=true&timeMin=${timeMin}&key=${process.env.NEXT_PUBLIC_CALENDAR_API_KEY}`

  const { data: events, error } = useSWR(url, getCalendarEvents)

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
