'use client'

import { BasicCard } from '@/components/BasicCard'
import { Heading } from '@/components/Heading'
import { TagLabel } from '@/components/TagLabel'
import { SmartTextLink } from '@/components/TextLink/SmartTextLink'

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

        <div className="space-y-4 lg:col-span-2">
          {event.tag && <TagLabel>{event.tag}</TagLabel>}

          <div className="space-y-2">
            <Heading tag="h3" variant="lg">
              {event.title}
            </Heading>

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
            <SmartTextLink href={event.url}>View Details</SmartTextLink>
          )}
        </div>
      </div>
    </BasicCard>
  )
}
