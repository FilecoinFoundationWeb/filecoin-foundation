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
    <div className="flex w-full justify-evenly gap-4 rounded-lg bg-brand-300 p-1 text-brand-700">
      <div className="flex">
        <button
          className="flex items-center rounded bg-brand-300 p-1 px-2 transition hover:bg-brand-700 hover:text-brand-100"
          aria-label="Previous"
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
            <li key={index} className="h-10 w-10 md:h-9 md:w-10">
              {typeof item === 'number' ? (
                <button
                  className={clsx(
                    'h-full w-full rounded',
                    item === currentPage
                      ? 'bg-brand-800 text-brand-100'
                      : 'bg-brand-300 text-brand-700',
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
          className="flex items-center rounded bg-brand-300 p-1 px-2 transition hover:bg-brand-700 hover:text-brand-100"
          aria-label="Next"
          onClick={handleNext}
        >
          <span className="ml-1.5">Next</span>
          <CaretRight size={24} className="ml-1.5" />
        </button>
      </div>
    </div>
  )
}
