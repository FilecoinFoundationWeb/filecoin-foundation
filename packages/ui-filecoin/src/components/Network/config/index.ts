import { type ChainId, type NetworkConfig } from '../types'

export const NETWORK_CONFIG = {
  314: {
    name: 'Mainnet',
    rpc: 'https://api.node.glif.io/rpc/v1',
    explorer: 'https://filfox.info',
  },
  314159: {
    name: 'Calibration',
    rpc: 'https://api.calibration.node.glif.io/rpc/v1',
    explorer: 'https://calibration.filfox.info',
  },
} as const satisfies Record<ChainId, NetworkConfig>

export const defaultChainId: ChainId = 314159
