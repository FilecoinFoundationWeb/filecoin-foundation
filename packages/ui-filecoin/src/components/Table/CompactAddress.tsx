import type { Address } from 'viem'

import { isValidUrl } from '../../utils/linkUtils'
import { truncateAddress } from '../../utils/truncateAddress'
import { ExternalTextLink } from '../TextLink/ExternalTextLink'

export type CompactAddressProps = {
  address: Address
  explorerUrl: string
}

export function CompactAddress({ address, explorerUrl }: CompactAddressProps) {
  if (!isValidUrl(explorerUrl)) {
    return (
      <span className="font-medium text-zinc-600">
        {truncateAddress(address)}
      </span>
    )
  }

  return (
    <ExternalTextLink
      href={`${explorerUrl}/${address}`}
      aria-label={`View address ${address} on Block Explorer`}
      title={address}
      className="font-medium whitespace-nowrap"
    >
      {truncateAddress(address)}
    </ExternalTextLink>
  )
}
