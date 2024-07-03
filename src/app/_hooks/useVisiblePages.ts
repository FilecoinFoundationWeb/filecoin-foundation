import { useMemo } from 'react'

const DISTANCE_FROM_START = 3
const DISTANCE_FROM_END = 2
const ELLIPSIS = '...'

export function useVisiblePages(
  pageCount: number,
  currentPage: number,
  range: number,
): (number | typeof ELLIPSIS)[] {
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
  pageNumbers: number[],
  currentPage: number,
  range: number,
): (number | typeof ELLIPSIS)[] {
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
  pageNumbers: number[],
  currentPage: number,
  range: number,
): number[] {
  const remainingArraySlots = range - 4
  const currentPageIndex = pageNumbers.indexOf(currentPage)

  return pageNumbers.slice(
    currentPageIndex - Math.floor(remainingArraySlots / 2),
    currentPageIndex + Math.ceil(remainingArraySlots / 2),
  )
}

function getVisiblePagesSmallRange(
  pageNumbers: number[],
  currentPage: number,
  range: number,
): (number | typeof ELLIPSIS)[] {
  const firstPage = pageNumbers[0]
  const lastPage = pageNumbers[pageNumbers.length - 1]

  switch (range) {
    case 1:
      return [currentPage]

    case 2:
      if (currentPage === firstPage) {
        return [currentPage, currentPage + 1]
      } else {
        return [currentPage - 1, currentPage]
      }

    case 3:
      if (currentPage === firstPage || currentPage === lastPage) {
        return [firstPage, ELLIPSIS, lastPage]
      } else {
        return [firstPage, currentPage, lastPage]
      }

    case 4:
      if (currentPage === firstPage) {
        return [firstPage, currentPage + 1, ELLIPSIS, lastPage]
      } else if (currentPage === lastPage) {
        return [firstPage, ELLIPSIS, currentPage - 1, lastPage]
      } else if (currentPage === lastPage - 1) {
        return [firstPage, ELLIPSIS, currentPage, lastPage]
      } else {
        return [firstPage, currentPage, ELLIPSIS, lastPage]
      }

    default:
      throw new Error(
        'getVisiblePagesSmallRange does not support ranges of ' + range,
      )
  }
}
