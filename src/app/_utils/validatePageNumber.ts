const DEFAULT_PAGE_NUMBER = 1

export function validatePageNumber(
  pageQuery: string | undefined,
  pageCount: number,
): number {
  const pageQueryNumber = Number(pageQuery)
  const isValidNumber = Number.isInteger(pageQueryNumber) && pageQueryNumber > 0
  const isWithinRange = pageQueryNumber <= pageCount

  if (!isValidNumber) {
    return DEFAULT_PAGE_NUMBER
  }

  if (!isWithinRange) {
    return pageCount
  }

  return pageQueryNumber
}
