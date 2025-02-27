import { DEFAULT_PAGE_NUMBER } from '@filecoin-foundation/utils/constants/paginationConstants'

import { type PageQuery } from './types'

export function validatePageNumber(pageQuery: PageQuery, pageCount: number) {
  if (!pageQuery) {
    return DEFAULT_PAGE_NUMBER
  }

  const pageQueryNumber = Number(pageQuery)
  const isValidPageNumber =
    Number.isInteger(pageQueryNumber) && pageQueryNumber > 0
  const isWithinRange = pageQueryNumber <= pageCount

  if (!isValidPageNumber) {
    return DEFAULT_PAGE_NUMBER
  }

  if (!isWithinRange) {
    return pageCount
  }

  return pageQueryNumber
}
