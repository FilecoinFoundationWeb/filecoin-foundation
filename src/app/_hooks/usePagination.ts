import { NextServerSearchParams } from '@/types/searchParams'

import { DEFAULT_PAGE_NUMBER } from '@/constants/paginationConstants'

type UsePaginationProps = {
  totalEntries: number
  entriesPerPage: number
  pageQuery?: NextServerSearchParams[string]
}

export function validatePageNumber(
  pageQuery: string | undefined,
  pageCount: number,
): number {
  const pageQueryNumber = Number(pageQuery)
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
  totalEntries,
  entriesPerPage,
  pageQuery,
}: UsePaginationProps) {
  const pageCount = Math.ceil(totalEntries / entriesPerPage)
  let currentPage

  if (Array.isArray(pageQuery)) {
    currentPage = validatePageNumber(pageQuery[0], pageCount)
  } else {
    currentPage = validatePageNumber(pageQuery, pageCount)
  }

  return { currentPage, pageCount }
}
