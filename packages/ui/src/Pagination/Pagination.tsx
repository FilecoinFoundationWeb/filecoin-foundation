'use client'

import { Button } from '@headlessui/react'
import { useQueryState, parseAsInteger } from 'nuqs'

import { DEFAULT_PAGE_NUMBER } from '@filecoin-foundation/utils/constants/paginationConstants'
import { PAGE_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

import { PaginationArrowButton } from './components/PaginationArrowButton'
import { PaginationDelimiter } from './components/PaginationDelimiter'
import { MAX_RANGE, useResponsiveRange } from './utils/useResponsiveRange'
import { useVisiblePages } from './utils/useVisiblePages'

type PaginationProps = {
  pageCount: number
  numberRange?: number
}

export function Pagination({
  pageCount,
  numberRange = MAX_RANGE,
}: PaginationProps) {
  if (numberRange > MAX_RANGE) {
    console.warn(
      `[Pagination]: The numberRange provided (${numberRange}) exceeds the maximum range allowed (${MAX_RANGE}). The maximum range (${MAX_RANGE}) will be used instead.`,
    )
  }

  const [page, setPage] = useQueryState(
    PAGE_KEY,
    parseAsInteger
      .withDefault(DEFAULT_PAGE_NUMBER)
      .withOptions({ shallow: false }),
  )

  const responsiveRange = useResponsiveRange()
  const range = Math.min(responsiveRange, numberRange)

  const visiblePages = useVisiblePages({ pageCount, currentPage: page, range })

  const canGoBack = page > 1
  const canGoForward = page < pageCount

  return (
    <nav
      aria-label="Pagination"
      role="navigation"
      className="pagination flex w-full justify-between"
    >
      <div className="flex">
        <PaginationArrowButton
          to="prev"
          disabled={!canGoBack}
          pageSetter={setPage}
        />
        <PaginationDelimiter />
      </div>

      <ul className="pagination-index-list flex shrink grow justify-center">
        {visiblePages.map((item, index) => (
          <li
            key={index}
            className="pagination-index-container"
            aria-current={item === page ? 'page' : undefined}
          >
            {typeof item === 'number' ? (
              <Button
                aria-label={`Go to page ${item}`}
                data-current={item === page}
                className="pagination-number-button cursor-pointer"
                onClick={() => setPage(item)}
              >
                {item}
              </Button>
            ) : (
              <span className="flex h-full w-full items-baseline justify-center">
                <span className="mt-1.5">{item}</span>
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="flex">
        <PaginationDelimiter />
        <PaginationArrowButton
          to="next"
          disabled={!canGoForward}
          pageSetter={setPage}
        />
      </div>
    </nav>
  )
}
