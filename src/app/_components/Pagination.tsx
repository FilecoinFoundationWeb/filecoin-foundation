'use client'

import { CaretLeft, CaretRight, LineVertical } from '@phosphor-icons/react'
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
  const collapsedRange = useCollapseRange(pageCount, currentPage, 6)

  function handlePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  function handleNext() {
    if (currentPage < pageCount) setCurrentPage(currentPage + 1)
  }

  function handlePageChange(page: number) {
    if (page !== currentPage) setCurrentPage(page)
  }

  return (
    <div className="flex w-full justify-between gap-4 rounded-lg bg-brand-300 p-1 text-brand-700">
      <div className="flex">
        <button
          className="flex items-center rounded bg-brand-300 p-1 px-2 transition hover:bg-brand-700 hover:text-brand-100"
          onClick={handlePrev}
        >
          <CaretLeft size={24} className="mr-2" />
          <span className="mr-1.5">Prev</span>
        </button>

        <div className="flex items-center">
          <LineVertical size={24} />
        </div>
      </div>

      <div className="flex grow justify-center gap-1">
        {collapsedRange.map((item, index) => {
          if (typeof item === 'string') {
            const ellipsis = item

            return (
              <span
                key={'ellipsis' + index}
                className="flex h-10 w-10 items-baseline justify-center rounded md:h-9 md:w-10"
              >
                <p className="mt-1.5">{ellipsis}</p>
              </span>
            )
          }

          const pageNumber = item

          return (
            <button
              key={'pageNumber' + index}
              className={clsx(
                'h-10 w-10 rounded md:h-9 md:w-10',
                pageNumber === currentPage
                  ? 'bg-brand-800 text-brand-100'
                  : 'bg-brand-300 text-brand-700',
              )}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>

      <div className="flex">
        <div className="flex items-center">
          <LineVertical size={24} />
        </div>

        <button
          className="flex items-center rounded bg-brand-300 p-1 px-2 transition hover:bg-brand-700 hover:text-brand-100"
          onClick={handleNext}
        >
          <span className="ml-1.5">Next</span>
          <CaretRight size={24} className="ml-2" />
        </button>
      </div>
    </div>
  )
}
