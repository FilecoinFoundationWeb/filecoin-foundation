import { ReadonlyURLSearchParams } from 'next/navigation'

export function buildSearchParams(
  newParams: Record<string, string | number>,
  existingParams?: URLSearchParams | ReadonlyURLSearchParams,
) {
  const params = new URLSearchParams(existingParams?.toString())

  Object.entries(newParams).forEach(([key, newValue]) => {
    const currentValueAsString = params.get(key)
    const newValueAsString = String(newValue)

    const hasValueChange = currentValueAsString !== newValueAsString
    const shouldDeleteParam = !newValue

    if (hasValueChange) {
      if (shouldDeleteParam) {
        params.delete(key)
      } else {
        params.set(key, newValueAsString)
      }
    }
  })

  return params.toString()
}
