import { ReadonlyURLSearchParams } from 'next/navigation'

export function buildSearchParams(
  newParams: Record<string, string | number>,
  existingParams?: URLSearchParams | ReadonlyURLSearchParams,
) {
  const params = new URLSearchParams(existingParams?.toString())

  Object.entries(newParams).forEach(([key, newValue]) => {
    const currentValue = params.get(key)

    if (currentValue != String(newValue)) {
      if (!newValue) params.delete(key)
      if (newValue) params.set(key, String(newValue))
    }
  })

  return params.toString()
}
