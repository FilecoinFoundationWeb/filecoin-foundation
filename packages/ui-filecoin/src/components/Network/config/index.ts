import { filecoin, filecoinCalibration } from 'wagmi/chains'

const mainnet = { ...filecoin, name: 'Mainnet' }
const calibration = { ...filecoinCalibration, name: 'Calibration' }

export const supportedChains = [calibration, mainnet]
export const supportedChainIds = supportedChains.map((chain) => chain.id)
export const defaultChain = supportedChains[0]
