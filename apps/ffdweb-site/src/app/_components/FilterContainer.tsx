import type { ReactElement } from 'react'

import { NoSearchResultsMessage } from '@filecoin-foundation/ui/NoSearchResultsMessage'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

type FilterContainerProps = {
  hasResults: boolean
  search: ReactElement
  pagination: ReactElement
  children: ReactElement
}

export function FilterContainer({
  hasResults,
  search,
  pagination,
  children,
}: FilterContainerProps) {
  return (
    <section>
      <div className="mb-8">
        <div className="max-w-readable w-full">{search}</div>
      </div>

      {hasResults ? (
        children
      ) : (
        <NoSearchResultsMessage baseDomain={BASE_DOMAIN} />
      )}

      {hasResults && (
        <div className="mt-16 flex justify-center">
          <div className="max-w-readable w-full">{pagination}</div>
        </div>
      )}
    </section>
  )
}
