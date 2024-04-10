import { useEffect } from 'react'

import { usePathname } from 'next/navigation'

import { buildSearchParams } from '@/utils/buildSearchParams'

type UseUpdateHistoryProps = {
  searchQuery: string
  currentPage: number
  searchKey: string
  pageKey: string
}

export function useUpdateHistory({
  searchQuery,
  currentPage,
  searchKey,
  pageKey,
}: UseUpdateHistoryProps) {
  const pathname = usePathname()

  useEffect(() => {
    const paramsObject = {
      [searchKey]: searchQuery,
      [pageKey]: currentPage,
    }
    const newParams = buildSearchParams(paramsObject)

    window.history.replaceState({}, '', `${pathname}?${newParams}`)

    return () => window.history.replaceState({}, '', pathname)
  }, [currentPage, pathname, searchQuery, searchKey, pageKey])
}
