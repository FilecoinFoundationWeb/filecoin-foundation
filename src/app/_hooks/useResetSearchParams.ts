import { useCallback } from 'react'

import { useRouter, usePathname } from 'next/navigation'

import { Route } from 'next'

export function useResetSearchParams() {
  const router = useRouter()
  const pathname = usePathname()

  const resetSearchParams = useCallback(() => {
    router.push(pathname as Route, { scroll: false })
  }, [router, pathname])

  return resetSearchParams
}
