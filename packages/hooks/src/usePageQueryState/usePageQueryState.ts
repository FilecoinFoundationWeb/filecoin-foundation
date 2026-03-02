import { useCallback } from 'react'

import { useQueryState, parseAsInteger } from 'nuqs'

import { DEFAULT_PAGE_NUMBER } from '@filecoin-foundation/utils/constants/paginationConstants'
import { PAGE_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

export function usePageQueryState(pageCount: number) {
  const [page, setPage] = useQueryState(
    PAGE_KEY,
    parseAsInteger
      .withDefault(DEFAULT_PAGE_NUMBER)
      .withOptions({ shallow: false }),
  )

  const canGoBack = page > 1
  const canGoForward = page < pageCount

  const goToNextPage = useCallback(() => {
    if (canGoForward) {
      return setPage((page) => page + 1)
    }
    console.warn('Cannot go to next page')
  }, [canGoForward, setPage])

  const goToPreviousPage = useCallback(() => {
    if (canGoBack) {
      return setPage((page) => page - 1)
    }
    console.warn('Cannot go to previous page')
  }, [canGoBack, setPage])

  const goToPage = useCallback(
    (number: number) => {
      if (number >= 1 && number <= pageCount) {
        return setPage(number)
      }
      console.warn('Cannot go to page ', number)
    },
    [pageCount, setPage],
  )

  return {
    page,
    canGoBack,
    canGoForward,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  }
}
