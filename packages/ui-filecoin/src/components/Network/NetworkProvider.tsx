'use client'

import { createContext, type ReactNode, use } from 'react'

import { useQueryState } from 'nuqs'

import { CHAIN_PARAM_KEY, defaultChain } from './config'
import type { ChainId } from './types'
import { parseAsChainId } from './utils'

type NetworkContextValue = {
  network: ChainId
  setNetwork: (network: ChainId) => void
}

const NetworkContext = createContext<NetworkContextValue>({
  network: defaultChain.id,
  setNetwork: () => {},
})

type NetworkProviderProps = Readonly<{ children: ReactNode }> & {
  paramKey?: string
}

export function NetworkProvider({
  children,
  paramKey = CHAIN_PARAM_KEY,
}: NetworkProviderProps) {
  const [network, setNetwork] = useQueryState(
    paramKey,
    parseAsChainId
      .withDefault(defaultChain.id)
      .withOptions({ clearOnDefault: false }),
  )

  return (
    <NetworkContext value={{ network, setNetwork }}>{children}</NetworkContext>
  )
}

export function useNetwork() {
  return use(NetworkContext)
}
