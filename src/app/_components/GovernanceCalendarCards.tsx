'use client'

import { useState } from 'react'

import { Clock, CalendarPlus } from '@phosphor-icons/react/dist/ssr'
import useSWR from 'swr'
import { z } from 'zod'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Heading } from '@/components/Heading'
import { TagLabel } from '@/components/TagLabel'

import { formatDateComponentsFromISO } from '@/utils/dateUtils'

import { GOOGLE_CALENDAR_API_URL } from '@/constants/apiUrls'

type CalendarProps = {
  startDate: string
}

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

function Calendar({ startDate }: CalendarProps) {
  const { day, month } = formatDateComponentsFromISO(startDate)

  return (
    <div className="grid h-40 w-full grid-rows-[_40px,auto] rounded-md border border-blue-400 bg-brand-500 sm:w-[140px]">
      <span className="flex items-center justify-center rounded-t text-base font-normal uppercase">
        {month}
      </span>
      <span className="flex items-center justify-center rounded-b bg-brand-100 text-5xl font-bold text-brand-400">
        {day}
      </span>
    </div>
  )
}

export function GovernanceCalendarCards() {
  const [currentDate] = useState(new Date())
  const timeMin = encodeURIComponent(currentDate.toISOString())

  const url = `${GOOGLE_CALENDAR_API_URL}${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?maxResults=6&singleEvents=true&timeMin=${timeMin}&key=${process.env.NEXT_PUBLIC_CALENDAR_API_KEY}`

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
                <div className="flex gap-2">
                  <TagLabel
                    borderColor="brand-100"
                    icon={Clock}
                  >{`UTC ${startTime} - ${endTime}`}</TagLabel>
                  <TagLabel>Zoom</TagLabel>
                </div>
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
