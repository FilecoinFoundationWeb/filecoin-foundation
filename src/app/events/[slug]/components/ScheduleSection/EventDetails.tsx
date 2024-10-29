'use client'

import { BasicCard } from '@/components/BasicCard'
import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import type { Event } from '../../../schemas/ScheduleSchema'
import { formatTime } from '../../utils/dateUtils'

import { Participants } from './Participants'

export function EventDetails(event: Event) {
  return (
    <BasicCard>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex gap-6 text-brand-300 lg:flex-col lg:gap-1">
          <div className="text-sm font-bold">
            <span>{formatTime(event.start)}</span>
            {event.end && <span> – {formatTime(event.end)}</span>}
          </div>
          <span className="text-sm">{event.location}</span>
        </div>
        <div className="lg:col-span-2">
          <Heading tag="h3" variant="lg">
            {event.title}
          </Heading>
          <div className="mt-2 space-y-2">
            {event.description && (
              <p className="max-w-readable">{event.description}</p>
            )}
            {event.moderators && (
              <Participants title="Moderator" participants={event.moderators} />
            )}
            {event.speakers && (
              <Participants title="Speaker" participants={event.speakers} />
            )}
          </div>
          {event.url && (
            <div className="mt-4">
              <TextLink href={event.url}>View Details</TextLink>
            </div>
          )}
        </div>
      </div>
    </BasicCard>
  )
}
