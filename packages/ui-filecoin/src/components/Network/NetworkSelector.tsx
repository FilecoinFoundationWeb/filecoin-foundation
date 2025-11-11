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

type NetworkSelectorProps = {
  options?: Array<NetworkOption>
}

export function NetworkSelector({
  options = networkOptions,
}: NetworkSelectorProps) {
  const { network, setNetwork } = useNetwork()

  const selectedOption =
    options.find((option) => option.id === network) || options[0]

  return (
    <Listbox
      options={options}
      selected={selectedOption}
      setSelected={(selected) => setNetwork(selected.id)}
      Icon={GlobeIcon}
    />
  )
}
