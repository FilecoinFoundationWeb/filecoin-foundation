import { useQueryState } from 'nuqs'

import { CHAIN_PARAM_KEY, defaultChain } from './config'
import { parseAsChainId } from './utils'

type UseNetworkParams = {
  paramKey?: string
}

export function useNetwork(params?: UseNetworkParams) {
  const paramKey = params?.paramKey || CHAIN_PARAM_KEY

  return useQueryState(
    paramKey,
    parseAsChainId
      .withDefault(defaultChain.id)
      .withOptions({ clearOnDefault: false }),
  )
}
