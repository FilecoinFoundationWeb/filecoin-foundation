import { useMemo } from 'react'

import type { Object } from '@/types/utils'

import {
  DEFAULT_ENTRIES_PER_PAGE,
  DEFAULT_PAGE_NUMBER,
} from '@/constants/paginationConstants'

type PageQuery = string | undefined

type UsePaginationProps<Entry extends Object> = {
  pageQuery: PageQuery
  entries: Array<Entry>
  entriesPerPage?: number
}

export function usePagination<Entry extends Object>({
  pageQuery,
  entries,
  entriesPerPage = DEFAULT_ENTRIES_PER_PAGE,
}: UsePaginationProps<Entry>) {
  const pageCount = Math.ceil(entries.length / entriesPerPage)
  const pageNumber = validatePageNumber(pageQuery, pageCount)

  const paginatedResults = useMemo(() => {
    const firstPostIndex = (pageNumber - 1) * entriesPerPage
    const lastPostIndex = pageNumber * entriesPerPage

    return entries.slice(firstPostIndex, lastPostIndex)
  }, [pageNumber, entriesPerPage, entries])

  return { currentPage: pageNumber, pageCount, paginatedResults }
}

function validatePageNumber(pageQuery: PageQuery, pageCount: number) {
  if (!pageQuery) {
    return DEFAULT_PAGE_NUMBER
  }

  const pageQueryNumber = Number(pageQuery)
  const isValidPageNumber =
    Number.isInteger(pageQueryNumber) && pageQueryNumber > 0
  const isWithinRange = pageQueryNumber <= pageCount

  if (!isValidPageNumber) {
    return DEFAULT_PAGE_NUMBER
  }

  if (!isWithinRange) {
    return pageCount
  }

  return pageQueryNumber
}
