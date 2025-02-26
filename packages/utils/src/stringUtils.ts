export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function truncate(string: string, maxLength: number) {
  const ELLIPSIS = '...'
  const cleanString = string.trim()

  if (cleanString.length <= maxLength) {
    return cleanString
  }

  return cleanString.slice(0, maxLength) + ELLIPSIS
}
