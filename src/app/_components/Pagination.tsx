'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { CaretLeft, CaretRight, LineVertical } from '@phosphor-icons/react'
import clsx from 'clsx'
import { Route } from 'next'

import { usePagination } from '@/hooks/usePagination'
import { useResponsiveRange } from '@/hooks/useResponsiveRange'
import { useVisiblePages } from '@/hooks/useVisiblePages'

import { buildSearchParams } from '@/utils/buildSearchParams'

import { PAGE_KEY } from '@/constants/searchParams'

type PaginationProps = ReturnType<typeof usePagination>

export function Pagination({ pageCount, currentPage }: PaginationProps) {
  const range = useResponsiveRange()
  const visiblePages = useVisiblePages(pageCount, currentPage, range)

  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const canGoBack = currentPage > 1
  const canGoForward = currentPage < pageCount

  function handlePrev() {
    if (canGoBack) updatePageSearchParam(currentPage - 1)
  }

  function handleNext() {
    if (canGoForward) updatePageSearchParam(currentPage + 1)
  }

  function handlePageChange(page: number) {
    if (page !== currentPage) updatePageSearchParam(page)
  }

  function updatePageSearchParam(page: number) {
    const newParams = buildSearchParams({ [PAGE_KEY]: page }, params)
    const newRoute = `${pathname}?${newParams}` as Route
    router.push(newRoute, { scroll: false })
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
                className={clsx(
                  'h-full w-full rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-white',
                  item === currentPage
                    ? 'bg-brand-800 text-brand-100'
                    : 'bg-brand-300 text-brand-700 hover:bg-brand-400',
                )}
                aria-label={`Go to page ${item}`}
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
