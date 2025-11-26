export type UIConfig = {
  baseDomain: string
  Link: any
}

let uiConfig: UIConfig | undefined

export function setUIConfig(config: UIConfig) {
  if (uiConfig) {
    console.warn('UIConfig already initialized')
  }
  uiConfig = config
}

export function getUIConfig() {
  if (!uiConfig) {
    throw new Error('UIConfig not initialized')
  }

  return uiConfig
}

export function resetUIConfig() {
  uiConfig = undefined
}
