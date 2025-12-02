import { filecoin, filecoinCalibration } from 'wagmi/chains'

const mainnet = { ...filecoin, name: 'Mainnet' } as const
const calibration = { ...filecoinCalibration, name: 'Calibration' } as const

export const supportedChains = [calibration, mainnet]
export const supportedChainIds = supportedChains.map((chain) => chain.id)
export const defaultChain = supportedChains[0]
