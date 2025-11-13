import type { supportedChains } from '../config'

export type ChainId = (typeof supportedChains)[number]['id']
