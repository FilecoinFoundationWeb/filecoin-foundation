export function capitalize(str: string) {
  const trimmed = str.trim()
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase()
}
