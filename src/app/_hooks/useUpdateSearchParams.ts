import { useCallback } from 'react'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import { Route } from 'next'

import { buildSearchParams } from '@/utils/buildSearchParams'

export function useUpdateSearchParams() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const updateSearchParams = useCallback(
    (updatedParams: Record<string, any>) => {
      const newParams = buildSearchParams(updatedParams, params)
      const newRoute = `${pathname}?${newParams}` as Route

      router.push(newRoute, { scroll: false })
    },
    [router, pathname, params],
  )

  return updateSearchParams
}
