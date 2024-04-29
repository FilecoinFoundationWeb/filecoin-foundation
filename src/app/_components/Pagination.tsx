'use client'

import { useState } from 'react'

import { CaretLeft, CaretRight, LineVertical } from '@phosphor-icons/react'
import clsx from 'clsx'
import { useDebounceCallback } from 'usehooks-ts'

import { usePagination } from '@/hooks/usePagination'
import { useResponsiveRange } from '@/hooks/useResponsiveRange'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'
import { useVisiblePages } from '@/hooks/useVisiblePages'

type PaginationProps = ReturnType<typeof usePagination>

export function Pagination({
  pageCount,
  currentPage: initialPage,
}: PaginationProps) {
  const [currentPage, setPage] = useState(initialPage)

  const range = useResponsiveRange()
  const updateSearchParams = useUpdateSearchParams()
  const visiblePages = useVisiblePages(pageCount, currentPage, range)

  const debouncedUpdateSearchParams = useDebounceCallback(
    updateSearchParams,
    350,
  )

  const canGoBack = currentPage > 1
  const canGoForward = currentPage < pageCount

  function handlePrev() {
    if (canGoBack) {
      const newPage = currentPage - 1
      setPage(newPage)
      debouncedUpdateSearchParams({ page: newPage })
    }
  }

  function handleNext() {
    if (canGoForward) {
      const newPage = currentPage + 1
      setPage(newPage)
      debouncedUpdateSearchParams({ page: newPage })
    }
  }

  function handlePageChange(page: number) {
    if (page !== currentPage) {
      setPage(page)
      updateSearchParams({ page })
    }
  }

  return (
    <nav
      aria-label="Pagination"
      role="navigation"
      className="flex w-full justify-between rounded-lg bg-brand-300 p-1 text-brand-700"
    >
      <div className="flex">
        <button
          aria-label="Go to previous page"
          aria-disabled={!canGoBack}
          disabled={!canGoBack}
          className={clsx(
            'flex items-center rounded bg-brand-300 p-1 px-2 transition',
            canGoBack
              ? 'hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
              : 'cursor-not-allowed',
          )}
          onClick={handlePrev}
        >
          <CaretLeft size={20} weight="bold" className="mr-1.5" />
          <span className="mr-1.5">Prev</span>
        </button>

        <div className="flex items-center">
          <LineVertical
            size={24}
            weight="light"
            className="text-brand-800/50"
          />
        </div>
      </div>

      <ul className="-mx-1 flex shrink grow justify-center gap-2 md:gap-1">
        {visiblePages.map((item, index) => (
          <li
            key={index}
            className="h-10 w-10 md:h-9 md:w-10"
            aria-current={item === currentPage ? 'page' : undefined}
          >
            {typeof item === 'number' ? (
              <button
                aria-label={`Go to page ${item}`}
                className={clsx(
                  'h-full w-full rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-white',
                  item === currentPage
                    ? 'bg-brand-800 text-brand-100'
                    : 'bg-brand-300 text-brand-700 hover:bg-brand-400',
                )}
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
        <div className="flex items-center">
          <LineVertical
            size={24}
            weight="light"
            className="text-brand-800/50"
          />
        </div>

        <button
          aria-label="Go to next page"
          aria-disabled={!canGoForward}
          disabled={!canGoForward}
          className={clsx(
            'flex items-center rounded bg-brand-300 p-1 px-2 transition',
            canGoForward
              ? 'hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
              : 'cursor-not-allowed',
          )}
          onClick={handleNext}
        >
          <span className="ml-1.5">Next</span>
          <CaretRight size={20} weight="bold" className="ml-1.5" />
        </button>
      </div>
    </nav>
  )
}
