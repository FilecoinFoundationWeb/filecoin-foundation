'use client'

import { useState } from 'react'

import { Clock, CalendarPlus } from '@phosphor-icons/react/dist/ssr'
import useSWR from 'swr'
import { z } from 'zod'

import { Badge } from '@/components/Badge'
import { CardLayout } from '@/components/CardLayout'
import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { extractTimeFromISO } from '@/utils/convertISOTime'

import { GOOGLE_CALENDAR_API_URL } from '@/constants/apiUrls'

type CalendarProps = {
  startDate: string
}

function Calendar({ startDate }: CalendarProps) {
  const { day, month } = extractTimeFromISO(startDate)

  return (
    <div className="grid min-h-40 min-w-36 grid-rows-[_40px,auto] rounded-md border border-blue-400 bg-blue-500">
      <span className="flex items-center justify-center rounded-t text-base font-normal uppercase">
        {month}
      </span>
      <span className="flex flex-1 items-center justify-center rounded-b bg-blue-100 text-5xl font-bold text-blue-400">
        {day}
      </span>
    </div>
  )
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

export function GovernanceCalendarCards() {
  const [currentDate] = useState(new Date())
  const timeMin = encodeURIComponent(currentDate.toISOString())

  const url = `${GOOGLE_CALENDAR_API_URL}${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?maxResults=6&singleEvents=true&timeMin=${timeMin}&key=${process.env.NEXT_PUBLIC_CALENDAR_API_KEY}`

  const { data: events, error } = useSWR(url, getEvents)

  if (error) return <div>Failed to load events</div>
  if (!events)
    return (
      <div className="flex h-[558px] items-center justify-center">
        Loading events...
      </div>
    )

  if (events?.items.length === 0) {
    return (
      <div className="flex h-[1976px] justify-center p-8 md:h-[1140px] lg:h-[558px] lg:items-center">
        No upcoming events
      </div>
    )
  }

  return (
    <CardLayout type="blogPost">
      {events.items.map((event) => {
        const { id, start, end, htmlLink, summary } = event

        const { time: startTime } = extractTimeFromISO(start.dateTime)
        const { time: endTime } = extractTimeFromISO(end.dateTime)

        return (
          <li
            key={id}
            className="flex flex-col rounded-lg border border-blue-500 p-1 sm:flex-row"
          >
            <Calendar startDate={start.dateTime} />
            <div className="flex flex-1 flex-col items-start justify-between gap-6 p-4">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <Badge
                    borderColor="brand-100"
                    icon={Clock}
                  >{`UTC ${startTime} - ${endTime}`}</Badge>
                  <Badge>Zoom</Badge>
                </div>
                <Heading tag="h3" variant="lg">
                  {summary}
                </Heading>
              </div>
              <TextLink className="flex gap-2 text-base" href={htmlLink}>
                <CalendarPlus size={24} />
                Add to Google Calendar
              </TextLink>
            </div>
          </li>
        )
      })}
    </CardLayout>
  )
}
