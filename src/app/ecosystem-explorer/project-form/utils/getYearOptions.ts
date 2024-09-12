import { getUTCMidnightToday } from '@/utils/dateUtils'

const FILECOIN_CREATION_YEAR = 2014

export function getYearOptions(order: 'asc' | 'desc' = 'asc') {
  const today = getUTCMidnightToday()
  const currentYear = today.getFullYear()

  const years = Array.from(
    { length: currentYear - FILECOIN_CREATION_YEAR + 1 },
    (_: unknown, index: number) => {
      const incrementedYear = FILECOIN_CREATION_YEAR + index

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
