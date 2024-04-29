import { NextServerSearchParams } from '@/types/searchParams'

import { validatePageNumber } from '@/utils/validatePageNumber'

type UsePaginationProps = {
  totalEntries: number
  entriesPerPage: number
  pageQuery?: NextServerSearchParams[string]
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
