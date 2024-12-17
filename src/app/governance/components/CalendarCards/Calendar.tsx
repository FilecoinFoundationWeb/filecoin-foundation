import { formatDateComponentsFromISO } from '@/utils/dateUtils'

type CalendarProps = {
  startDate: string
}

export function Calendar({ startDate }: CalendarProps) {
  const { day, month } = formatDateComponentsFromISO(startDate)

  return (
    <div className="grid h-40 w-full grid-rows-[_40px,auto] rounded-md border border-blue-400 bg-brand-500 sm:w-[140px]">
      <span className="flex items-center justify-center rounded-t text-base font-normal uppercase">
        {month}
      </span>
      <span className="flex items-center justify-center rounded-b bg-brand-100 text-5xl font-bold text-brand-400">
        {day}
      </span>
    </div>
  )
}
