import { useMemo } from 'react'

const DISTANCE_FROM_START = 3
const DISTANCE_FROM_END = 2
const ELLIPSIS = '...'

export function useVisiblePages(
  pageCount: number,
  currentPage: number,
  range: number,
): Array<number | typeof ELLIPSIS> {
  if (range <= 0) {
    throw new Error('range must be greater than 0')
  }

  const pageNumbers = useMemo(() => {
    return Array.from({ length: pageCount }, (_, i) => i + 1)
  }, [pageCount])

  const needsEllipsis = pageNumbers.length > range
  if (!needsEllipsis) return pageNumbers

  if (range <= 4) {
    return getVisiblePagesSmallRange(pageNumbers, currentPage, range)
  }

  return getVisiblePages(pageNumbers, currentPage, range)
}

function getVisiblePages(
  pageNumbers: Array<number>,
  currentPage: number,
  range: number,
): Array<number | typeof ELLIPSIS> {
  const needsStartEllipsis = currentPage - DISTANCE_FROM_START > 0
  const needsEndEllipsis = currentPage + DISTANCE_FROM_END < pageNumbers.length

  const firstPage = pageNumbers[0]
  const lastPage = pageNumbers[pageNumbers.length - 1]

  if (needsStartEllipsis && !needsEndEllipsis) {
    const remainingArraySlots = range - 2
    const lastPages = pageNumbers.slice(-remainingArraySlots)

    return [firstPage, ELLIPSIS, ...lastPages]
  }

  if (!needsStartEllipsis && needsEndEllipsis) {
    const remainingArraySlots = range - 2
    const firstPages = pageNumbers.slice(0, remainingArraySlots)

    return [...firstPages, ELLIPSIS, lastPage]
  }

  return [
    firstPage,
    ELLIPSIS,
    ...getMiddlePages(pageNumbers, currentPage, range),
    ELLIPSIS,
    lastPage,
  ]
}

function getMiddlePages(
  pageNumbers: Array<number>,
  currentPage: number,
  range: number,
): Array<number> {
  const remainingArraySlots = range - 4
  const currentPageIndex = pageNumbers.indexOf(currentPage)

  return pageNumbers.slice(
    currentPageIndex - Math.floor(remainingArraySlots / 2),
    currentPageIndex + Math.ceil(remainingArraySlots / 2),
  )
}

function getVisiblePagesSmallRange(
  pageNumbers: Array<number>,
  currentPage: number,
  range: number,
): Array<number> {
  if (range === 1) return [currentPage]

  const firstPageIndex = pageNumbers.indexOf(pageNumbers[0])
  const currentPageIndex = pageNumbers.indexOf(currentPage)

  const firstPageOrBeforeCurrentIndex = Math.max(
    firstPageIndex,
    currentPageIndex - Math.floor(range / 2),
  )

  const lastPageOrAfterCurrentIndex = Math.min(
    pageNumbers.length,
    currentPageIndex + Math.ceil(range / 2),
  )

  return pageNumbers.slice(
    Math.min(firstPageOrBeforeCurrentIndex, pageNumbers.length - range),
    Math.max(lastPageOrAfterCurrentIndex, range),
  )
}
