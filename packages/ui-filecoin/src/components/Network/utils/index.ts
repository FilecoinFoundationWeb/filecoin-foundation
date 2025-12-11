import { createParser, parseAsInteger } from 'nuqs'

import { defaultChain, supportedChainIds } from '../config'

export const parseAsChainId = createParser({
  parse(queryValue) {
    const integer = parseAsInteger.parse(queryValue)
    const validChainId = supportedChainIds.find((id) => id === integer)

    if (
      process.env.NODE_ENV === 'development' &&
      typeof validChainId === 'undefined'
    ) {
      console.warn(
        `Invalid chain ID "${integer}" provided. Falling back to ${defaultChain.name} (${defaultChain.id})`,
      )
    }

    return validChainId || defaultChain.id
  },
  serialize: parseAsInteger.serialize,
})
