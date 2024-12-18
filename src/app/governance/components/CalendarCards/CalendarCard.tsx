import { Clock, CalendarPlus } from '@phosphor-icons/react/dist/ssr'

import { formatDateComponentsFromISO } from '@/utils/dateUtils'

import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { TagGroup } from '@/components/TagComponents/TagGroup'

import type { CalendarEventType } from '../../schemas/CalendarEventSchemas'

import { Calendar } from './Calendar'

type CalendarCardProps = Omit<CalendarEventType, 'id'>

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
          <TagGroup
            tags={[
              { text: `UTC ${startTime} - ${endTime}`, icon: Clock },
              { text: 'Zoom' },
            ]}
          />

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
