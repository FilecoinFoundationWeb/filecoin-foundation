import { filecoin, filecoinCalibration } from 'wagmi/chains'

export const supportedChains = [filecoinCalibration, filecoin]
export const supportedChainIds = supportedChains.map((chain) => chain.id)

export const defaultChain = supportedChains[0]
