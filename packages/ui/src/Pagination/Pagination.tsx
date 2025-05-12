'use client'

import { CaretLeft, CaretRight, LineVertical } from '@phosphor-icons/react'
import { useQueryState, parseAsInteger } from 'nuqs'

import { Icon } from '@filecoin-foundation/ui/Icon'
import { DEFAULT_PAGE_NUMBER } from '@filecoin-foundation/utils/constants/paginationConstants'
import { PAGE_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

import { useResponsiveRange } from './utils/useResponsiveRange'
import { useVisiblePages } from './utils/useVisiblePages'

type PaginationProps = {
  pageCount: number
}

export function Pagination({ pageCount }: PaginationProps) {
  const [page, setPage] = useQueryState(
    PAGE_KEY,
    parseAsInteger
      .withDefault(DEFAULT_PAGE_NUMBER)
      .withOptions({ shallow: false }),
  )

  const range = useResponsiveRange()
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
        <button
          aria-label="Go to previous page"
          aria-disabled={!canGoBack}
          disabled={!canGoBack}
          className={
            'pagination-navigation-button flex items-center gap-x-1.5 p-1 px-2 transition'
          }
          onClick={() => setPage(page - 1)}
        >
          <Icon component={CaretLeft} size={20} weight="bold" />
          <span className="hidden sm:mx-1.5 sm:inline">Prev</span>
        </button>

        <div className="pagination-delimiter flex items-center">
          <Icon component={LineVertical} weight="light" />
        </div>
      </div>

      <ul className="-mx-1 flex shrink grow justify-center gap-1">
        {visiblePages.map((item, index) => (
          <li
            key={index}
            className="h-10 w-10 md:h-9 md:w-10"
            aria-current={item === page ? 'page' : undefined}
          >
            {typeof item === 'number' ? (
              <button
                aria-label={`Go to page ${item}`}
                data-current={item === page}
                className="pagination-navigation-number focus-visible:outline-2 focus-visible:outline-white"
                onClick={() => setPage(item)}
              >
                {item}
              </button>
            ) : (
              <span className="flex h-full w-full items-baseline justify-center">
                <span className="mt-1.5">{item}</span>
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="flex">
        <div className="pagination-delimiter flex items-center">
          <Icon component={LineVertical} weight="light" />
        </div>

        <button
          aria-label="Go to next page"
          aria-disabled={!canGoForward}
          disabled={!canGoForward}
          className="pagination-navigation-button flex items-center gap-x-1.5 p-1 px-2 transition"
          onClick={() => setPage(page + 1)}
        >
          <span className="hidden sm:mx-1.5 sm:inline">Next</span>
          <Icon component={CaretRight} size={20} weight="bold" />
        </button>
      </div>
    </nav>
  )
}
