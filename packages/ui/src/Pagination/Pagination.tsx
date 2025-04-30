'use client'

import { useState, useEffect } from 'react'

import { CaretLeft, CaretRight, LineVertical } from '@phosphor-icons/react'
import { useDebounceCallback } from 'usehooks-ts'

import { useUpdateSearchParams } from '@filecoin-foundation/hooks/useUpdateSearchParams'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { DEFAULT_PAGE_NUMBER } from '@filecoin-foundation/utils/constants/paginationConstants'
import { PAGE_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

import { useResponsiveRange } from './utils/useResponsiveRange'
import { useVisiblePages } from './utils/useVisiblePages'

type PaginationProps = {
  pageCount: number
  currentPage: number
}

const DEBOUNCE_DELAY = 300

export function Pagination({
  pageCount,
  currentPage: initialPage,
}: PaginationProps) {
  const [currentPage, setPage] = useState(initialPage)

  const range = useResponsiveRange()
  const visiblePages = useVisiblePages(pageCount, currentPage, range)

  const { updateSearchParams } = useUpdateSearchParams()
  const debouncedUpdateSearchParams = useDebounceCallback(
    updateSearchParams,
    DEBOUNCE_DELAY,
  )

  const canGoBack = currentPage > 1
  const canGoForward = currentPage < pageCount

  function handlePrev() {
    if (canGoBack) {
      const newPage = currentPage - 1
      setPage(newPage)
      debouncedUpdateSearchParams({ [PAGE_KEY]: newPage })
    }
  }

  function handleNext() {
    if (canGoForward) {
      const newPage = currentPage + 1
      setPage(newPage)
      debouncedUpdateSearchParams({ [PAGE_KEY]: newPage })
    }
  }

  function handlePageChange(page: number) {
    if (page !== currentPage) {
      setPage(page)
      updateSearchParams({ [PAGE_KEY]: page })
    }
  }

  useEffect(() => {
    const pageIsReset = initialPage === DEFAULT_PAGE_NUMBER

    if (pageIsReset) {
      setPage(DEFAULT_PAGE_NUMBER)
    }
  }, [initialPage])

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
          onClick={handlePrev}
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
            aria-current={item === currentPage ? 'page' : undefined}
          >
            {typeof item === 'number' ? (
              <button
                aria-label={`Go to page ${item}`}
                data-current={item === currentPage}
                className="pagination-navigation-number focus-visible:outline-2 focus-visible:outline-white"
                onClick={() => handlePageChange(item)}
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
          onClick={handleNext}
        >
          <span className="hidden sm:mx-1.5 sm:inline">Next</span>
          <Icon component={CaretRight} size={20} weight="bold" />
        </button>
      </div>
    </nav>
  )
}
