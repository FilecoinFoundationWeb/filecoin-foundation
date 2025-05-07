import { useMemo } from 'react'

import { DEFAULT_ENTRIES_PER_PAGE } from '@filecoin-foundation/utils/constants/paginationConstants'
import type { AnyObject } from '@filecoin-foundation/utils/types/utilTypes'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { validatePageNumber } from './utils/validatePageNumber'

type UsePaginationProps<Entry extends AnyObject> = {
  pageQuery: ReturnType<typeof normalizeQueryParam>
  entries: Array<Entry>
  entriesPerPage?: number
}

export function usePagination<Entry extends AnyObject>({
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

  return { pageCount, paginatedResults }
}
