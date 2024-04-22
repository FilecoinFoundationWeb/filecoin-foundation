import { useMemo } from 'react'

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
  const pageCount = useMemo(
    () => Math.ceil(totalEntries / entriesPerPage),
    [totalEntries, entriesPerPage],
  )

  const currentPage = useMemo(() => {
    if (Array.isArray(pageQuery)) {
      return validatePageNumber(pageQuery[0], pageCount)
    }

    return validatePageNumber(pageQuery, pageCount)
  }, [pageQuery, pageCount])

  return { currentPage, pageCount }
}
