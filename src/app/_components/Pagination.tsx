'use client'

import { useMemo } from 'react'

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
  const pages = useMemo(() => Math.ceil(total / size), [total, size])
  const indexes = Array.from({ length: pages }, (_, index) => index + 1)

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
        {indexes.map((index) => {
          return (
            <button
              key={index}
              className={clsx(
                'size-8 rounded transition-colors duration-75',
                index == currentPage && 'bg-brand-800 text-brand-100',
                index != currentPage && 'bg-brand-300 text-brand-700',
              )}
              onClick={() => {
                if (index != currentPage) setCurrentPage(index)
              }}
            >
              {index}
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
