import { Clock, CalendarPlus } from '@phosphor-icons/react/dist/ssr'

import { formatDateComponentsFromISO } from '@/utils/dateUtils'

import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { TagGroupContainer } from '@/components/TagComponents/TagGroupContainer'
import { TagLabel } from '@/components/TagLabel'

import { Calendar } from './Calendar'
import type { EventType } from './CalendarCards'

type CalendarCardProps = Omit<EventType, 'id'>

export function CalendarCard({
  start,
  end,
  htmlLink,
  summary,
}: CalendarCardProps) {
  const { time: startTime } = formatDateComponentsFromISO(start.dateTime)
  const { time: endTime } = formatDateComponentsFromISO(end.dateTime)

  return (
    <li className="relative flex flex-col rounded-lg border border-brand-300 p-1 sm:flex-row">
      <Calendar startDate={start.dateTime} />

      <div className="flex-1 pb-14 sm:pb-0">
        <div className="flex flex-col gap-3 p-4">
          <TagGroupContainer>
            <TagLabel icon={Clock}>{`UTC ${startTime} - ${endTime}`}</TagLabel>
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
}
