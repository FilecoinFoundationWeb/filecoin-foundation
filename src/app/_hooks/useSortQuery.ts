import { type NextServerSearchParams } from '@/types/searchParams'
import { type SortOptionType } from '@/types/sortTypes'

import { normalizeQueryParam } from '@/utils/queryUtils'

import { SORT_KEY } from '@/constants/searchParams'
import {
  DEFAULT_SORT_OPTION,
  VALID_SORT_OPTIONS,
} from '@/constants/sortConstants'

type UseSortQueryProps = {
  searchParams: NextServerSearchParams
  defaultSortOption?: SortOptionType
}

function validateSortOption(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  defaultSortOption: UseSortQueryProps['defaultSortOption'] = DEFAULT_SORT_OPTION,
) {
  if (!normalizedQuery) {
    return defaultSortOption
  }

  if (VALID_SORT_OPTIONS.includes(normalizedQuery as SortOptionType)) {
    return normalizedQuery as SortOptionType
  }

  return defaultSortOption
}

export function useSortQuery({
  searchParams,
  defaultSortOption,
}: UseSortQueryProps) {
  const normalizedQuery = normalizeQueryParam(searchParams, SORT_KEY)

  const validatedSortOption = validateSortOption(
    normalizedQuery,
    defaultSortOption,
  )

  return { sortQuery: validatedSortOption }
}
