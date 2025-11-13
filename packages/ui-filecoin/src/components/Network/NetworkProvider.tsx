'use client'

import { createContext, type ReactNode, use } from 'react'

import { useLocalStorage } from 'usehooks-ts'

import { defaultChain } from './config'
import type { ChainId } from './types'

type NetworkContextValue = {
  network: ChainId
  setNetwork: (network: ChainId) => void
}

const NetworkContext = createContext<NetworkContextValue>({
  network: defaultChain.id,
  setNetwork: () => {},
})

type NetworkProviderProps = Readonly<{ children: ReactNode }>

export function NetworkProvider({ children }: NetworkProviderProps) {
  const [network, setNetwork] = useLocalStorage<ChainId>(
    'network-id',
    defaultChain.id,
  )

  return (
    <NetworkContext value={{ network, setNetwork }}>{children}</NetworkContext>
  )
}

export function useNetwork() {
  return use(NetworkContext)
}
