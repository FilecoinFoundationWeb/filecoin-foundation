import { useMemo } from 'react'

import type { Object } from '@/types/utils'

import {
  DEFAULT_ENTRIES_PER_PAGE,
  DEFAULT_PAGE_NUMBER,
} from '@/constants/paginationConstants'

type PaginationQuery = string | undefined

type UsePaginationProps<Entry extends Object> = {
  paginationQuery: PaginationQuery
  entries: Array<Entry>
  entriesPerPage?: number
}

function validatePageNumber(
  paginationQuery: PaginationQuery,
  pageCount: number,
): number {
  if (!paginationQuery) {
    return DEFAULT_PAGE_NUMBER
  }

  const pageQueryNumber = Number(paginationQuery)
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

export function usePagination<Entry extends Object>({
  paginationQuery,
  entries,
  entriesPerPage = DEFAULT_ENTRIES_PER_PAGE,
}: UsePaginationProps<Entry>) {
  const pageCount = Math.ceil(entries.length / entriesPerPage)

  const validatedPageNumber = validatePageNumber(paginationQuery, pageCount)

  const currentPage = validatedPageNumber

  const paginatedResults = useMemo(() => {
    const firstPostIndex = (currentPage - 1) * entriesPerPage
    const lastPostIndex = currentPage * entriesPerPage

    return entries.slice(firstPostIndex, lastPostIndex)
  }, [currentPage, entriesPerPage, entries])

  return { currentPage: validatedPageNumber, pageCount, paginatedResults }
}
