import { NextServerSearchParams } from '@/types/searchParams'

import { normalizeQueryParam } from '@/utils/queryUtils'

import { DEFAULT_PAGE_NUMBER } from '@/constants/paginationConstants'
import { PAGE_KEY } from '@/constants/searchParams'

type UsePaginationProps = {
  searchParams: NextServerSearchParams
  totalEntries: number
  entriesPerPage: number
}

export function validatePageNumber(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  pageCount: number,
): number {
  if (!normalizedQuery) {
    return DEFAULT_PAGE_NUMBER
  }

  const pageQueryNumber = Number(normalizedQuery)
  const isValidNumber = Number.isInteger(pageQueryNumber) && pageQueryNumber > 0
  const isWithinRange = pageQueryNumber <= pageCount

  if (!isValidNumber) {
    return DEFAULT_PAGE_NUMBER
  }

  if (!isWithinRange) {
    return pageCount
  }

  return pageQueryNumber
}

export function usePagination({
  searchParams,
  totalEntries,
  entriesPerPage,
}: UsePaginationProps) {
  const pageCount = Math.ceil(totalEntries / entriesPerPage)

  const normalizedQuery = normalizeQueryParam(searchParams, PAGE_KEY)
  const validatedPageNumber = validatePageNumber(normalizedQuery, pageCount)

  return { currentPage: validatedPageNumber, pageCount }
}
