import { useMemo } from 'react'

import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import {
  DEFAULT_ENTRIES_PER_PAGE,
  DEFAULT_PAGE_NUMBER,
} from '@/constants/paginationConstants'
import { PAGE_KEY } from '@/constants/searchParams'

import { normalizeQueryParam } from '@/utils/queryUtils'

type UsePaginationProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  entriesPerPage?: number
}

function validatePageNumber(
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

export function usePagination<Entry extends Object>({
  searchParams,
  entries,
  entriesPerPage = DEFAULT_ENTRIES_PER_PAGE,
}: UsePaginationProps<Entry>) {
  const pageCount = Math.ceil(entries.length / entriesPerPage)

  const normalizedQuery = normalizeQueryParam(searchParams, PAGE_KEY)
  const validatedPageNumber = validatePageNumber(normalizedQuery, pageCount)

  const currentPage = validatedPageNumber

  const paginatedResults = useMemo(() => {
    const firstPostIndex = (currentPage - 1) * entriesPerPage
    const lastPostIndex = currentPage * entriesPerPage

    return entries.slice(firstPostIndex, lastPostIndex)
  }, [currentPage, entriesPerPage, entries])

  return { currentPage: validatedPageNumber, pageCount, paginatedResults }
}
