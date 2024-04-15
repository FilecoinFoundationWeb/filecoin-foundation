'use client'

import { CaretLeft, CaretRight, LineVertical } from '@phosphor-icons/react'
import clsx from 'clsx'

import { useResponsiveRange } from '@/hooks/useResponsiveRange'
import { useVisiblePages } from '@/hooks/useVisiblePages'

type PaginationProps = {
  currentPage: number
  pageCount: number
  setCurrentPage: (page: number) => void
}

export function Pagination({
  pageCount,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const range = useResponsiveRange()
  const visiblePages = useVisiblePages(pageCount, currentPage, range)

  const canGoBack = currentPage > 1
  const canGoForward = currentPage < pageCount

  function handlePrev() {
    if (canGoBack) setCurrentPage(currentPage - 1)
  }

  function handleNext() {
    if (canGoForward) setCurrentPage(currentPage + 1)
  }

  function handlePageChange(page: number) {
    if (page !== currentPage) setCurrentPage(page)
  }

  return (
    <nav
      aria-label="Pagination"
      role="navigation"
      className="flex w-full justify-between rounded-lg bg-brand-300 p-1 text-brand-700"
    >
      <div className="flex">
        <button
          className={clsx(
            'flex items-center rounded bg-brand-300 p-1 px-2 transition',
            canGoBack
              ? 'hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
              : 'cursor-not-allowed',
          )}
          aria-label="Go to previous page"
          aria-disabled={!canGoBack}
          disabled={!canGoBack}
          onClick={handlePrev}
        >
          <CaretLeft size={20} weight="bold" className="mr-1.5" />
          <span className="mr-1.5">Prev</span>
        </button>

        <div className="flex items-center">
          <LineVertical
            size={24}
            weight="light"
            className="text-[#08072E]/50"
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
                className={clsx(
                  'h-full w-full rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-white',
                  item === currentPage
                    ? 'bg-brand-800 text-brand-100'
                    : 'bg-brand-300 text-brand-700 hover:bg-brand-400',
                )}
                aria-label={'Page ' + item}
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
            className="text-[#08072E]/50"
          />
        </div>

        <button
          className={clsx(
            'flex items-center rounded bg-brand-300 p-1 px-2 transition',
            canGoForward
              ? 'hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
              : 'cursor-not-allowed',
          )}
          aria-label="Go to next page"
          aria-disabled={!canGoForward}
          disabled={!canGoForward}
          onClick={handleNext}
        >
          <span className="ml-1.5">Next</span>
          <CaretRight size={20} weight="bold" className="ml-1.5" />
        </button>
      </div>
    </nav>
  )
}
