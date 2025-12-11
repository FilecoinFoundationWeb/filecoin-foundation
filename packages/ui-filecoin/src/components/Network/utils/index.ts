import { createParser, parseAsInteger } from 'nuqs'

import { defaultChain, supportedChainIds } from '../config'

export const parseAsChainId = createParser({
  parse(queryValue) {
    const integer = parseAsInteger.parse(queryValue)
    const validChainId = supportedChainIds.find((id) => id === integer)
    return validChainId || defaultChain.id
  },
  serialize: parseAsInteger.serialize,
})
