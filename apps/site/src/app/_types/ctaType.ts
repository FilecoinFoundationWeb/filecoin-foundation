import { type IconProps } from '@/components/Icon'

export type CTAProps = {
  href: string
  text: string
  icon?: IconProps['component']
  ariaLabel?: string
}
