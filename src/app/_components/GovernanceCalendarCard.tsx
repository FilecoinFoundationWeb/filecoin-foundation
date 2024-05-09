import { Clock, CalendarPlus } from '@phosphor-icons/react/dist/ssr'

import { Heading } from '@/components/Heading'

import { addMinutesToISO, extractTimeFromISO } from '@/utils/convertISOTime'

import { Icon, IconProps } from './Icon'
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

function OutlineLabel({
  text,
  borderColor = 'blue-100',
  icon,
}: {
  text: string
  borderColor?: 'blue-100' | 'blue-500'
  icon?: IconProps['component']
}) {
  const borderStyles = {
    'blue-100': 'border-blue-100',
    'blue-500': 'border-blue-500',
  }
  return (
    <div
      className={`flex w-max items-center gap-1 rounded-lg border ${borderStyles[borderColor]} px-2 py-1 text-xs`}
    >
      {icon && <Icon component={icon} size={16} />}
      <span className="-m-px">{text}</span>
    </div>
  )
}

export function GovernanceCalendarCard({
  title,
  startDate,
  durationInMinutes,
  cta,
}: GovernanceCalendarCardProps) {
  const { time } = extractTimeFromISO(startDate)
  const endTime = addMinutesToISO(startDate, durationInMinutes)

  if (!startDate) {
    return
  }

  return (
    <li className="flex flex-col rounded-md border border-blue-500 p-1 sm:flex-row">
      <Calendar startDate={startDate} />

      <div className="flex flex-1 flex-col items-start justify-between gap-6 p-4">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <OutlineLabel text={` UTC ${time} - ${endTime}`} icon={Clock} />
            <OutlineLabel text="Zoom" borderColor="blue-500" />
          </div>
          <Heading tag="h3" variant="lg">
            {title}
          </Heading>
        </div>
        <TextLink className="flex gap-2 text-base" href={cta.url}>
          <CalendarPlus size={24} />
          {cta.text}
        </TextLink>
      </div>
    </li>
  )
}
