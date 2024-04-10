import { useState, useEffect, useMemo } from 'react'

import { validatePageNumber } from '@/utils/validatePageNumber'

interface UsePaginationProps {
  totalEntries: number
  postsPerPage: number
  searchParams: URLSearchParams
  currentPageKey: string
}

export function usePagination({
  totalEntries,
  postsPerPage,
  searchParams,
  currentPageKey,
}: UsePaginationProps) {
  const pageCount = useMemo(
    () => Math.ceil(totalEntries / postsPerPage),
    [totalEntries, postsPerPage],
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
