'use client'

import { GlobeIcon } from '@phosphor-icons/react/dist/ssr'

import { Listbox } from '../Listbox'

import { supportedChains } from './config'
import { useNetwork } from './NetworkProvider'

const networkOptions = supportedChains.map((chain) => ({
  id: chain.id,
  label: chain.name,
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
