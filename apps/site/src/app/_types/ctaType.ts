import { type IconProps } from '@/components/Icon'

export type CTAProps = {
  href: string
  text: string
  ariaLabel?: string,
  icon?: IconProps['component']
}
