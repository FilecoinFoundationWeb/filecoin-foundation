import { useQueryState } from 'nuqs'

import { PAGE_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

import { DEFAULT_PAGE_NUMBER } from '@filecoin-foundation/utils/constants/paginationConstants'
import { parseAsInteger } from 'nuqs'

export function useResetPageQuery() {
  const [page, setPage] = useQueryState(
    PAGE_KEY,
    parseAsInteger
      .withDefault(DEFAULT_PAGE_NUMBER)
      .withOptions({ shallow: false }),
  )

  return function resetPageQuery() {
    if (page !== DEFAULT_PAGE_NUMBER) {
      setPage(DEFAULT_PAGE_NUMBER)
    }
  }
}
