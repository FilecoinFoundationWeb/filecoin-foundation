import { useMemo } from 'react'

// Inspiration: https://atlassian.design/components/pagination

const DISTANCE_FROM_START = 3
const DISTANCE_FROM_END = 2
const ELLIPSIS = '...'

export function useCollapseRange(
  pageCount: number,
  currentPage: number,
  range: number,
): Array<number | typeof ELLIPSIS> {
  const pageNumbers = useMemo(() => {
    return Array.from({ length: pageCount }, (_, i) => i + 1)
  }, [pageCount])

  // Boolean
  const needEllipsis = pageNumbers.length > range
  const needsStartEllipsis = currentPage - DISTANCE_FROM_START > 0
  const needsEndEllipsis = currentPage + DISTANCE_FROM_END < pageNumbers.length

  // page numbers
  const firstPageNumber = pageNumbers[0]
  const lastPageNumber = pageNumbers[pageNumbers.length - 1]

  // Indexes of page numbers
  const firstPageNumberIndex = pageNumbers.indexOf(firstPageNumber)
  const currentPageIndex = pageNumbers.indexOf(currentPage)

  // Early returns
  if (range <= 0) throw new Error('range must be greater than 0')
  if (!needEllipsis) return pageNumbers
  if (range === 1) return [currentPage]

  // If range is less than 4, we don't show any ellipsis
  if (range <= 4) {
    const firstOrBeforeCurrentIndex = Math.max(
      firstPageNumberIndex,
      currentPageIndex - Math.floor(range / 2),
    )

    const lastOrAfterCurrentIndex = Math.min(
      pageNumbers.length,
      currentPageIndex + Math.ceil(range / 2),
    )

    return pageNumbers.slice(
      Math.min(firstOrBeforeCurrentIndex, pageNumbers.length - range),
      Math.max(lastOrAfterCurrentIndex, range),
    )
  }

  // Ellipsis at the start only
  if (needsStartEllipsis && !needsEndEllipsis) {
    const remainingArraySlots = range - 2

    return [
      firstPageNumber,
      ELLIPSIS,
      ...pageNumbers.slice(-remainingArraySlots),
    ]
  }

  // Ellipsis at the end only
  if (!needsStartEllipsis && needsEndEllipsis) {
    const remainingArraySlots = range - 2

    return [
      ...pageNumbers.slice(0, remainingArraySlots),
      ELLIPSIS,
      lastPageNumber,
    ]
  }

  // Ellipsis on both ends
  const remainingArraySlots = range - 4

  const middleIndexes = pageNumbers.slice(
    currentPageIndex - Math.floor(remainingArraySlots / 2),
    currentPageIndex + Math.ceil(remainingArraySlots / 2),
  )

  return [firstPageNumber, ELLIPSIS, ...middleIndexes, ELLIPSIS, lastPageNumber]
}
