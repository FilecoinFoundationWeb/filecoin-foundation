import type { Event } from '@/types/eventType'

import { BasicCard } from '@/components/BasicCard'
import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { formatDate, formatTime } from '../utils/dateUtils'

type ScheduleProps = {
  schedule: Event['schedule']
}

export function Schedule({ schedule }: ScheduleProps) {
  return (
    <>
      {schedule!.days.map((day) => {
        return (
          <div key={formatDate(day.date)} className="grid gap-6">
            <span className="font-bold text-brand-300">
              {formatDate(day.date)}
            </span>
            <BasicCard key={formatDate(day.date)}>
              {day.events.map((event) => (
                <div key={event.title} className="grid gap-6 lg:grid-cols-3">
                  <div className="flex gap-6 text-brand-300 lg:flex-col lg:gap-4">
                    <div className="text-sm font-bold">
                      <span>{formatTime(event.start)}</span>
                      {event.end && <span> – {formatTime(event.end)}</span>}
                    </div>
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div key={event.title} className="lg:col-span-2">
                    <Heading tag="h3" variant="lg">
                      {event.title}
                    </Heading>
                    <p className="mb-4 mt-2 max-w-readable">
                      {event.description}
                    </p>
                    {event.url && (
                      <TextLink href={event.url}>View Details</TextLink>
                    )}
                  </div>
                </div>
              ))}
            </BasicCard>
          </div>
        )
      })}
    </>
  )
}
