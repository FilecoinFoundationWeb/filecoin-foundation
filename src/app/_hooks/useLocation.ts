import { useMemo } from 'react'

import { type CategoryCounts, type CategoryId } from '@/types/categoryTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { REGION_KEY } from '@/constants/searchParams'

import { normalizeQueryParam } from '@/utils/queryUtils'

export type UseCategoryProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  validLocationIds: Array<CategoryId>
}

function validateLocationOption(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  validLocationIds: Array<CategoryId>,
) {
  console.log({ normalizedQuery })
  if (!normalizedQuery) {
    return undefined
  }

  const validCategoryId = validLocationIds.find(
    (option) => option === normalizedQuery,
  )

  return validCategoryId
}

export function useLocation<Entry extends Object>({
  searchParams,
  entries,
  validLocationIds,
}: UseCategoryProps<Entry>) {
  const normalizedQuery = normalizeQueryParam(searchParams, REGION_KEY)
  const validatedLocationOption = validateLocationOption(
    normalizedQuery,
    validLocationIds,
  )

  const categorizedResults = useMemo(() => {
    if (!validatedLocationOption) {
      return entries
    }

    return entries.filter((entry) => {
      return entry.location.region === validatedLocationOption
    })
  }, [entries, validatedLocationOption])

  const locationCounts = useMemo(() => {
    const counts: CategoryCounts = {}

    validLocationIds.forEach((option) => {
      counts[option] = entries.filter(
        (entry) => entry.location.region === option,
      ).length
    })

    return counts
  }, [entries, validLocationIds])

  return {
    locationQuery: validatedLocationOption,
    categorizedLocationResults: categorizedResults,
    locationCounts,
  }
}
