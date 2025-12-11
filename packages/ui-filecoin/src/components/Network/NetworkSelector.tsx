'use client'

import { GlobeIcon } from '@phosphor-icons/react/dist/ssr'

import { Listbox, type Option } from '../Listbox'

import { supportedChains } from './config'
import type { ChainId } from './types'
import { useNetwork } from './useNetwork'

const networkOptions = supportedChains.map((chain) => ({
  id: chain.id,
  label: chain.name,
}))

type ChainIdOption = { id: ChainId } & Omit<Option, 'id'>

export type NetworkSelectorProps = {
  options?: ReadonlyArray<ChainIdOption>
}

export function NetworkSelector({
  options = networkOptions,
}: NetworkSelectorProps) {
  const [network, setNetwork] = useNetwork()

  const selectedOption =
    options.find((option) => option.id === network) || networkOptions[0]

  return (
    <Listbox
      options={options}
      selected={selectedOption}
      setSelected={(selected) => setNetwork(selected.id)}
      Icon={GlobeIcon}
    />
  )
}
