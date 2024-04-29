import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import { Route } from 'next'

import { buildSearchParams } from '@/utils/buildSearchParams'

export function useUpdateRoute() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  function updateRoute(updatedParams: Record<string, any>) {
    const newParams = buildSearchParams(updatedParams, params)
    const newRoute = `${pathname}?${newParams}` as Route

    router.push(newRoute, { scroll: false })
  }

  return updateRoute
}
