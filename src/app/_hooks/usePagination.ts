import { useState, useEffect, useMemo } from 'react'

import { validatePageNumber } from '@/utils/validatePageNumber'

type UsePaginationProps = {
  totalEntries: number
  entriesPerPage: number
  searchParams: URLSearchParams
  currentPageKey: string
}

export function usePagination({
  totalEntries,
  entriesPerPage,
  searchParams,
  currentPageKey,
}: UsePaginationProps) {
  const pageCount = useMemo(
    () => Math.ceil(totalEntries / entriesPerPage),
    [totalEntries, entriesPerPage],
  )

  const [currentPage, setCurrentPage] = useState<number>(() => {
    return validatePageNumber(searchParams.get(currentPageKey), pageCount)
  })

  useEffect(() => {
    const page = searchParams.get(currentPageKey)
    setCurrentPage(validatePageNumber(page, pageCount))
  }, [searchParams, currentPageKey, pageCount])

  return { currentPage, setCurrentPage, pageCount }
}
