'use client'

import { GlobeIcon } from '@phosphor-icons/react/dist/ssr'

import { Listbox } from '../Listbox'

import { useNetwork } from './NetworkProvider'
import type { Network } from './types'

type NetworkOption = {
  id: Network
  label: string
}

const networkOptions = [
  {
    id: 'calibration',
    label: 'Calibration',
  },
  {
    id: 'mainnet',
    label: 'Mainnet',
  },
] satisfies Array<NetworkOption>

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
