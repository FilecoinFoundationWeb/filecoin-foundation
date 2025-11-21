import { type Address, getAddress } from 'viem'

export function truncateAddress(
  address: Address,
  startLength = 6,
  endLength = 4,
) {
  const checksummed = getAddress(address)
  return `${checksummed.slice(0, startLength)}...${checksummed.slice(-endLength)}`
}
