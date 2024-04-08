'use client'

import clsx from 'clsx'

type PaginationProps = {
  currentPage: number
  total: number
  size: number
  setCurrentPage: (page: number) => void
}

export function Pagination({
  currentPage,
  setCurrentPage,
  total,
  size,
}: PaginationProps) {
  const pages = Math.ceil(total / size)

  return (
    <div className="flex justify-between gap-4 rounded-lg bg-brand-300 p-2 text-brand-700">
      {/* Prev */}
      <button
        className="rounded px-3 py-1 transition hover:bg-brand-400/30"
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1)
        }}
      >
        Prev
      </button>

      {/* Numbers */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: pages }).map((_, index) => {
          const page = index + 1

          return (
            <button
              key={page}
              className={clsx(
                'size-8 rounded transition-colors duration-75',
                page == currentPage && 'bg-brand-800 text-brand-100',
                page != currentPage && 'bg-brand-300 text-brand-700',
              )}
              onClick={() => {
                if (page != currentPage) setCurrentPage(page)
              }}
            >
              {page}
            </button>
          )
        })}
      </div>

      {/* Next */}
      <button
        className="rounded px-3 py-1 transition hover:bg-brand-400/30"
        onClick={() => {
          if (currentPage < pages) setCurrentPage(currentPage + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}
