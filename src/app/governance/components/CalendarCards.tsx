'use client'

import { useState } from 'react'

import { Clock, CalendarPlus } from '@phosphor-icons/react/dist/ssr'
import useSWR from 'swr'
import { z } from 'zod'

import { API_URLS } from '@/constants/apiUrls'

import { formatDateComponentsFromISO } from '@/utils/dateUtils'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Heading } from '@/components/Heading'
import { TagGroupContainer } from '@/components/TagComponents/TagGroupContainer'
import { TagLabel } from '@/components/TagLabel'

import { Calendar } from './CalendarCards/Calendar'

type PlaceholderProps = {
  text: string
}

const eventSchema = z.object({
  id: z.string(),
  start: z.object({ dateTime: z.string() }),
  end: z.object({ dateTime: z.string() }),
  htmlLink: z.string(),
  summary: z.string(),
})

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

function Placeholder({ text }: PlaceholderProps) {
  return (
    <div className="py-8 lg:flex lg:h-[558px] lg:items-center lg:justify-center">
      {text}
    </div>
  )
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
      {events.items.map((event) => {
        const { id, start, end, htmlLink, summary } = event

        const { time: startTime } = formatDateComponentsFromISO(start.dateTime)
        const { time: endTime } = formatDateComponentsFromISO(end.dateTime)

        return (
          <li
            key={id}
            className="relative flex flex-col rounded-lg border border-brand-300 p-1 sm:flex-row"
          >
            <Calendar startDate={start.dateTime} />
            <div className="flex-1 pb-14 sm:pb-0">
              <div className="flex flex-col gap-3 p-4">
                <TagGroupContainer>
                  <TagLabel
                    icon={Clock}
                  >{`UTC ${startTime} - ${endTime}`}</TagLabel>
                  <TagLabel variant="secondary">Zoom</TagLabel>
                </TagGroupContainer>

                <Heading tag="h3" variant="lg">
                  {summary}
                </Heading>
              </div>

              <Card.Link
                href={htmlLink}
                icon={CalendarPlus}
                text="Add to Google Calendar"
                left={['left-4', 'sm:left-40']}
              />
            </div>
          </li>
        )
      })}
    </CardGrid>
  )
}