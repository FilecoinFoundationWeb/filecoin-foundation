'use client'

import { createContext, type ReactNode, use } from 'react'

import { useLocalStorage } from 'usehooks-ts'
import { useChainId } from 'wagmi'

import { defaultChainId, NETWORK_CONFIG } from './config'
import type { ChainId } from './types'

type NetworkContextValue = {
  network: ChainId
  setNetwork: (network: ChainId) => void
}

const NetworkContext = createContext<NetworkContextValue>({
  network: defaultChainId,
  setNetwork: () => {},
})

type NetworkProviderProps = Readonly<{ children: ReactNode }>

export function NetworkProvider({ children }: NetworkProviderProps) {
  const [network, setNetwork] = useLocalStorage<ChainId>(
    'network-id',
    defaultChainId,
  )

  const chainId = useChainId()

  if (chainId !== network) {
    const chainIsSupported = Object.keys(NETWORK_CONFIG).includes(
      chainId.toString(),
    )

    if (chainIsSupported) {
      setNetwork(chainId as ChainId)
    }
  }

  return (
    <NetworkContext value={{ network, setNetwork }}>{children}</NetworkContext>
  )
}

export function useNetwork() {
  return use(NetworkContext)
}
