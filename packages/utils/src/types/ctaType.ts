import { type IconProps } from '@filecoin-foundation/ui/Icon'

type CTAIconProps = {
  component: IconProps['component']
  size?: IconProps['size']
  position?: 'leading' | 'trailing'
  weight?: IconProps['weight']
}

export type CTAProps = {
  href: string
  text: string
  icon?: CTAIconProps
  ariaLabel?: string
}

export type ExtendedCTAProps = CTAProps & {
  baseDomain: string
}
