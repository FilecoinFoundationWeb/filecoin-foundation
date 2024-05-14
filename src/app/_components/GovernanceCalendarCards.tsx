'use client'

import { Clock, CalendarPlus } from '@phosphor-icons/react/dist/ssr'
import useSWR from 'swr'

import { Badge } from '@/components/Badge'
import { CardLayout } from '@/components/CardLayout'
import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { extractTimeFromISO } from '@/utils/convertISOTime'

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

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

export function GovernanceCalendarCards({
  currentDate,
}: {
  currentDate: Date
}) {
  const timeMin = encodeURIComponent(currentDate.toISOString())

  const { data: events, error } = useSWR(
    `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?maxResults=6&singleEvents=true&timeMin=${timeMin}&key=${process.env.NEXT_PUBLIC_CALENDAR_API_KEY}`,
    fetcher,
  )

  if (error) return <div>Failed to load events</div>
  if (!events) return <div>Loading events...</div>

  return (
    <CardLayout type="blogPost">
      {events.items.map((event: any) => {
        const { id, start, end, htmlLink, summary } = event

        const { time: startTime } = extractTimeFromISO(start.dateTime)
        const { time: endTime } = extractTimeFromISO(end.dateTime)

        return (
          <li
            key={id}
            className="flex flex-col rounded-md border border-blue-500 p-1 sm:flex-row"
          >
            <Calendar startDate={start.dateTime} />
            <div className="flex flex-1 flex-col items-start justify-between gap-6 p-4">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <Badge icon={Clock}>{`UTC ${startTime} - ${endTime}`}</Badge>
                  <Badge variant="secondary">Zoom</Badge>
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
