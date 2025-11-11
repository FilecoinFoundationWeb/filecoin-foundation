import type { Address } from 'viem'

import { truncateAddress } from '../../utils/truncateAddress'
import { ExternalTextLink } from '../TextLink/ExternalTextLink'

export type CompactAddressProps = {
  address: Address
  explorerUrl: string
}

export function CompactAddress({ address, explorerUrl }: CompactAddressProps) {
  return (
    <ExternalTextLink
      href={`${explorerUrl}/${address}`}
      aria-label={`View address ${address} on Block Explorer`}
      title={address}
      className="whitespace-nowrap"
    >
      <span className="font-medium">{truncateAddress(address)}</span>
    </ExternalTextLink>
  )
}
