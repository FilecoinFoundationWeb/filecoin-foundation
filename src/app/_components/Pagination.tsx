'use client'

import { CaretLeft, CaretRight, LineVertical } from '@phosphor-icons/react'
import { useMediaQuery } from '@uidotdev/usehooks'
import clsx from 'clsx'

import { useCollapseRange } from '@/hooks/useCollapseRange'

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
  const isXsDevice = useMediaQuery('only screen and (max-width : 640px)')

  const collapsedRange = useCollapseRange(
    pageCount,
    currentPage,
    isXsDevice ? 2 : 6,
  )

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
      className="flex w-full justify-evenly gap-4 rounded-lg bg-brand-300 p-1.5 text-brand-700"
    >
      <div className="flex">
        <button
          className={clsx(
            'flex items-center rounded bg-brand-300 p-1 px-2 transition',
            canGoBack
              ? 'hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
              : 'cursor-not-allowed',
          )}
          aria-label="Previous"
          aria-disabled={!canGoBack}
          disabled={!canGoBack}
          onClick={handlePrev}
        >
          <CaretLeft size={24} className="mr-1.5" />
          <span className="mr-1.5">Prev</span>
        </button>

        <div className="flex items-center">
          <LineVertical size={24} />
        </div>
      </div>

      <ul className="flex shrink grow justify-center gap-2 sm:gap-1">
        {collapsedRange.map((item, index) => {
          return (
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
          )
        })}
      </ul>

      <div className="flex">
        <div className="flex items-center">
          <LineVertical size={24} />
        </div>

        <button
          className={clsx(
            'flex items-center rounded bg-brand-300 p-1 px-2 transition',
            canGoForward
              ? 'hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
              : 'cursor-not-allowed',
          )}
          aria-label="Next"
          aria-disabled={!canGoForward}
          disabled={!canGoForward}
          onClick={handleNext}
        >
          <span className="ml-1.5">Next</span>
          <CaretRight size={24} className="ml-1.5" />
        </button>
      </div>
    </nav>
  )
}
