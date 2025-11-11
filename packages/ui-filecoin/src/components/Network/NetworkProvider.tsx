'use client'

import { createContext, type ReactNode, use, useState } from 'react'

import type { Network } from './types'

type NetworkContextValue = {
  network: Network
  setNetwork: (network: Network) => void
}

export const defaultNetwork: Network = 'calibration'

const NetworkContext = createContext<NetworkContextValue>({
  network: defaultNetwork,
  setNetwork: () => {},
})

type NetworkProviderProps = Readonly<{ children: ReactNode }>

export function NetworkProvider({ children }: NetworkProviderProps) {
  const [network, setNetwork] = useState<Network>(defaultNetwork)

  return (
    <NetworkContext value={{ network, setNetwork }}>{children}</NetworkContext>
  )
}

export function useNetwork() {
  const context = use(NetworkContext)

  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider')
  }

  return context
}
