import { useMemo } from 'react'

export const ELLIPSIS = '...'

// TODO: Find a way to test this as well. Export the constants and use them in the tests.
const DISTANCE_FROM_START = 3
const DISTANCE_FROM_END = 2

type UseVisiblePagesOptions = {
  pageCount: number
  currentPage: number
  range: number
}

export function useVisiblePages({
  pageCount,
  currentPage,
  range,
}: UseVisiblePagesOptions) {
  if (range <= 0) {
    throw new Error('range must be greater than 0')
  }

  const pageNumbers = useMemo(() => {
    return Array.from({ length: pageCount }, (_, i) => i + 1)
  }, [pageCount])

  const needsEllipsis = pageNumbers.length > range
  if (!needsEllipsis) return pageNumbers

  if (range <= 5) {
    return getVisiblePagesSmallRange(pageNumbers, currentPage, range)
  }

  return getVisiblePages(pageNumbers, currentPage, range)
}

function getVisiblePages(
  pageNumbers: Array<number>,
  currentPage: number,
  range: number,
) {
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
) {
  const remainingArraySlots = range - 4
  const currentPageIndex = pageNumbers.indexOf(currentPage)

  const startIndex = currentPageIndex - Math.floor(remainingArraySlots / 2)
  const endIndex = currentPageIndex + Math.ceil(remainingArraySlots / 2)

  if (startIndex <= 2) {
    return pageNumbers.slice(2, remainingArraySlots + 2)
  }

  if (pageNumbers.length - endIndex <= 2) {
    return pageNumbers.slice(
      pageNumbers.length - remainingArraySlots - 2,
      pageNumbers.length - 2,
    )
  }

  return pageNumbers.slice(startIndex, endIndex)
}

function getVisiblePagesSmallRange(
  pageNumbers: Array<number>,
  currentPage: number,
  range: number,
) {
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

    case 5: {
      if (currentPage === firstPage) {
        return [firstPage, currentPage + 1, currentPage + 2, ELLIPSIS, lastPage]
      } else if (currentPage === firstPage + 1) {
        return [firstPage, currentPage, currentPage + 1, ELLIPSIS, lastPage]
      } else if (currentPage === firstPage + 2) {
        return [firstPage, currentPage - 1, currentPage, ELLIPSIS, lastPage]
      } else if (currentPage === lastPage) {
        return [firstPage, ELLIPSIS, currentPage - 2, currentPage - 1, lastPage]
      } else if (currentPage === lastPage - 1) {
        return [firstPage, ELLIPSIS, currentPage - 1, currentPage, lastPage]
      } else if (currentPage === lastPage - 2) {
        return [firstPage, ELLIPSIS, currentPage, lastPage - 1, lastPage]
      } else {
        return [firstPage, ELLIPSIS, currentPage, ELLIPSIS, lastPage]
      }
    }

    default:
      throw new Error(
        'getVisiblePagesSmallRange does not support ranges of ' + range,
      )
  }
}
