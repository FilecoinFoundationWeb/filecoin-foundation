import { useEffect, useState } from 'react'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import { Route } from 'next'

type Config = {
  syncOnInit?: boolean
}

export function useUrlState<T extends string | number>(
  initialState: T,
  key: string,
  config?: Config,
) {
  const { syncOnInit = false } = config || {}

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const [state, setState] = useState<T>(() => {
    const value = searchParams.get(key)

    if (typeof initialState == 'number') {
      return (value ? Number(value) : initialState) as T
    }

    return (value ? value : initialState) as T
  })

  useEffect(() => {
    if (syncOnInit) syncUrl(state)
  }, [])

  function setStateAndSyncUrl(newState: T) {
    setState(newState)
    syncUrl(newState)
  }

  function syncUrl(newState: T) {
    const params = new URLSearchParams(searchParams.toString())

    if (params.get(key) != String(newState)) {
      if (Boolean(newState)) params.set(key, String(newState))
      if (!Boolean(newState)) params.delete(key)
    }

    const url = `${pathname}?${params.toString()}`
    router.push(url as Route, { scroll: false })
  }

  return [state, setStateAndSyncUrl] as const
}
