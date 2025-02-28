import { getUTCMidnightToday } from '@filecoin-foundation/utils/dateUtils'

export const FILECOIN_LAUNCH_YEAR = 2017

export function getYearOptions(order: 'asc' | 'desc' = 'asc') {
  const today = getUTCMidnightToday()
  const currentYear = today.getFullYear()

  const years = Array.from(
    { length: currentYear - FILECOIN_LAUNCH_YEAR + 1 },
    (_: unknown, index: number) => {
      const incrementedYear = FILECOIN_LAUNCH_YEAR + index

      return {
        id: String(incrementedYear),
        name: String(incrementedYear),
      }
    },
  )

  if (order === 'desc') {
    years.reverse()
  }

  return years
}
