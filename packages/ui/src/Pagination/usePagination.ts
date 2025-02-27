import { useMemo } from 'react'

import { DEFAULT_ENTRIES_PER_PAGE } from '@filecoin-foundation/utils/constants/paginationConstants'

import { validatePageNumber } from './utils/validatePageNumber'
import { type AnyObject, type PageQuery } from './utils/types'

type UsePaginationProps<Entry extends AnyObject> = {
  pageQuery: PageQuery
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

  return { currentPage: pageNumber, pageCount, paginatedResults }
}
