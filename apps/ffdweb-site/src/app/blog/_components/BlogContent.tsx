'use client'

import { useSearchParams } from 'next/navigation'

import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import {
  PAGE_KEY,
  SEARCH_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

const dummyEntries = Array.from({ length: 200 }, (_, index) => ({
  title: `Post Title ${index + 1}`,
}))

export function BlogContent() {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: dummyEntries,
    searchBy: 'title',
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: searchResults,
  })

  return (
    <section className="mx-auto max-w-3xl">
      <div className="flex justify-end pb-8">
        <div className="lg:max-w-readable">
          <Search query={searchQuery} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {paginatedResults.map((entry) => (
          <div key={entry.title} className="bg-neutral-800 p-4">
            <h1>{entry.title}</h1>
            <p className="pt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        ))}
      </div>

      <br />
      <br />

      <Pagination pageCount={pageCount} currentPage={currentPage} />
    </section>
  )
}
