'use client'

import clsx from 'clsx'

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
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1)

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
    <div className="flex justify-between gap-4 rounded-lg bg-brand-300 p-2 text-brand-700">
      <button
        className="rounded px-3 py-1 transition hover:bg-brand-400/30"
        onClick={handlePrev}
      >
        Prev
      </button>

      <div className="flex justify-center gap-2">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={clsx(
              'size-8 rounded transition-colors duration-75',
              page === currentPage
                ? 'bg-brand-800 text-brand-100'
                : 'bg-brand-300 text-brand-700',
            )}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="rounded px-3 py-1 transition hover:bg-brand-400/30"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  )
}
