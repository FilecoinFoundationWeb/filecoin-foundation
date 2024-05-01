import { Clock, CalendarBlank } from '@phosphor-icons/react/dist/ssr'

import { Heading } from '@/components/Heading'

import { addMinutesToISO, extractTimeFromISO } from '@/utils/convertISOTime'

import { TextLink } from './TextLink'

export type GovernanceCalendarCardProps = {
  title: string
  startDate: string
  cta: {
    url: string
    text: string
  }
  durationInMinutes: number
  as?: React.ElementType
}

type CalendarProps = {
  startDate: string
}

function Calendar({ startDate }: CalendarProps) {
  const { day, month } = extractTimeFromISO(startDate)
  return (
    <div className="min-w-xs grid grid-rows-[_40px,_96px] rounded-md border border-blue-400 bg-blue-500 sm:min-w-32">
      <span className="flex items-center justify-center rounded-tl-[5px] rounded-tr-[5px] text-base font-normal uppercase">
        {month}
      </span>
      <span className="flex items-center justify-center rounded-bl-[5px]  rounded-br-[5px] bg-blue-100 text-5xl font-bold text-blue-400">
        {day}
      </span>
    </div>
  )
}

export function GovernanceCalendarCard({
  title,
  startDate,
  durationInMinutes,
  cta,
  as: Tag = 'li',
}: GovernanceCalendarCardProps) {
  const { time } = extractTimeFromISO(startDate)
  const endTime = addMinutesToISO(startDate, durationInMinutes)

  if (!startDate) {
    return
  }

  return (
    <Tag className="flex flex-col gap-6 rounded-md border border-blue-500 p-4 sm:flex-row">
      <Calendar startDate={startDate} />

      <div className="flex flex-1 flex-col items-start justify-between gap-6">
        <div className="flex flex-col gap-3">
          <Heading tag="h3" variant="lg">
            {title}
          </Heading>

          <div className="flex w-max items-center gap-1 rounded-lg border border-blue-100 px-1 py-[2px] text-xs uppercase">
            <Clock size={13} />
            <span className="mb-[-1px]">
              UTC {time} - {endTime}
            </span>
          </div>
        </div>
        <TextLink className="flex gap-1 text-base" href={cta.url}>
          <CalendarBlank size={24} />
          {cta.text}
        </TextLink>
      </div>
    </Tag>
  )
}
