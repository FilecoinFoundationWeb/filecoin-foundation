import type { ComponentType } from 'react'

export type MinimalLinkProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  href: any
  children?: React.ReactNode
  className?: string
  locale?: string
  replace?: boolean
  scroll?: boolean
  prefetch?: boolean | 'auto' | null
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  onNavigate?: (event: { preventDefault: () => void }) => void
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export type UIConfig = {
  baseDomain: string
  Link: ComponentType<MinimalLinkProps>
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
