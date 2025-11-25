// import type { ComponentProps, ComponentType } from 'react'

export type UIConfig = {
  baseDomain: string
  Link: any
}

let uiConfig: UIConfig | undefined

export function setUIConfig(config: UIConfig) {
  uiConfig = config
}

export function getUIConfig() {
  if (!uiConfig) {
    throw new Error('UI config has not been set')
  }

  return uiConfig
}
