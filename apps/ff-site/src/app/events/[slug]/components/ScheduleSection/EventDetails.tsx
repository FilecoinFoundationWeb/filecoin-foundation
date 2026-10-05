'use client'

import { Heading } from '@filecoin-foundation/ui/Heading'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'
import { SmartTextLink } from '@filecoin-foundation/ui/TextLink/SmartTextLink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import type { Event } from '@/qino/collections/events'

import { BasicCard } from '@/components/BasicCard'

import { formatTime } from '../../utils/dateUtils'

import { Participants } from './Participants'

type EventDetailsProps = NonNullable<
  Event['schedule']
>['days'][number]['events'][number]

export function EventDetails({
  startTime,
  endTime,
  location,
  tag,
  title,
  description,
  moderators,
  speakers,
  url,
}: EventDetailsProps) {
  return (
    <BasicCard>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="text-brand-300 flex gap-6 lg:flex-col lg:gap-1">
          <div className="text-sm font-bold">
            <span>{formatTime(startTime)}</span>
            {endTime && <span> – {formatTime(endTime)}</span>}
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

          {url && (
            <SmartTextLink href={url} baseDomain={BASE_DOMAIN}>
              View Details
            </SmartTextLink>
          )}
        </div>
      </div>
    </BasicCard>
  )
}
