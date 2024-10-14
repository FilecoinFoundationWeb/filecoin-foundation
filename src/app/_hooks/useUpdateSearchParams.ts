'use client'

import { useCallback } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import type { Route } from 'next'

import { type ParamsObject, buildSearchParams } from '@/utils/buildSearchParams'

export function useUpdateSearchParams() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const updateSearchParams = useCallback(
    (updatedParams: ParamsObject) => {
      const newParams = buildSearchParams(updatedParams, params)
      const newRoute = `${pathname}?${newParams}` as Route

      router.push(newRoute, { scroll: false })
    },
    [router, pathname, params],
  )

  const removeSearchParams = useCallback(
    (keysToRemove: Array<string>) => {
      const newParams = new URLSearchParams(params.toString())

      for (const key of keysToRemove) {
        newParams.delete(key)
      }

      const newRoute = `${pathname}?${newParams.toString()}` as Route
      router.push(newRoute, { scroll: false })
    },
    [router, pathname, params],
  )

  const resetSearchParams = useCallback(() => {
    router.push(pathname as Route, { scroll: false })
  }, [router, pathname])

  return { updateSearchParams, resetSearchParams, removeSearchParams }
}
