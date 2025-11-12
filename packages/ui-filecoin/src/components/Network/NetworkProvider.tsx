'use client'

import { createContext, type ReactNode, use, useState } from 'react'

import type { ChainId } from './types'

type NetworkContextValue = {
  network: ChainId
  setNetwork: (network: ChainId) => void
}

export const defaultNetwork: ChainId = 314159

const NetworkContext = createContext<NetworkContextValue>({
  network: defaultNetwork,
  setNetwork: () => {},
})

type NetworkProviderProps = Readonly<{ children: ReactNode }>

export function NetworkProvider({ children }: NetworkProviderProps) {
  const [network, setNetwork] = useState<ChainId>(defaultNetwork)

  return (
    <NetworkContext value={{ network, setNetwork }}>{children}</NetworkContext>
  )
}

export function useNetwork() {
  return use(NetworkContext)
}
