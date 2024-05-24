import { ReadonlyURLSearchParams } from 'next/navigation'

export type ParamsObject = Record<string, string | number>

export function buildSearchParams(
  newParams: ParamsObject,
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
