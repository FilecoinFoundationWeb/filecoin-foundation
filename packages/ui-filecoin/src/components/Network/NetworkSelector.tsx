'use client'

import { GlobeIcon } from '@phosphor-icons/react/dist/ssr'

import { Listbox } from '../Listbox'

import { NETWORK_CONFIG } from './config'
import { useNetwork } from './NetworkProvider'
import type { ChainId } from './types'

const networkOptions = Object.entries(NETWORK_CONFIG).map(([id, { name }]) => ({
  id: Number(id) as ChainId,
  label: name,
}))

export function NetworkSelector() {
  const { network, setNetwork } = useNetwork()

  const selectedOption =
    networkOptions.find((option) => option.id === network) || networkOptions[0]

  return (
    <Listbox
      options={networkOptions}
      selected={selectedOption}
      setSelected={(selected) => setNetwork(selected.id)}
      Icon={GlobeIcon}
    />
  )
}
