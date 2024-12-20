'use client'

import { BasicCard } from '@/components/BasicCard'
import { Heading } from '@/components/Heading'
import { TagLabel } from '@/components/TagComponents/TagLabel'
import { SmartTextLink } from '@/components/TextLink/SmartTextLink'

import type { Event } from '../../../schemas/ScheduleSchema'
import { formatTime } from '../../utils/dateUtils'

import { Participants } from './Participants'

export function EventDetails({
  start,
  end,
  location,
  tag,
  title,
  description,
  moderators,
  speakers,
  url,
}: Event) {
  return (
    <BasicCard>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex gap-6 text-brand-300 lg:flex-col lg:gap-1">
          <div className="text-sm font-bold">
            <span>{formatTime(start)}</span>
            {end && <span> – {formatTime(end)}</span>}
          </div>
          <span className="text-sm">{location}</span>
        </div>

        <div className="space-y-4 lg:col-span-2">
          {tag && <TagLabel>{tag}</TagLabel>}

          <div className="space-y-2">
            <Heading tag="h3" variant="lg">
              {title}
            </Heading>

            {description && <p className="max-w-readable">{description}</p>}

            {moderators && (
              <Participants title="Moderator" participants={moderators} />
            )}

            {speakers && (
              <Participants title="Speaker" participants={speakers} />
            )}
          </div>

          {url && <SmartTextLink href={url}>View Details</SmartTextLink>}
        </div>
      </div>
    </BasicCard>
  )
}
